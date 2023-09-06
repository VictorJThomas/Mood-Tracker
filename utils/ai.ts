import { PromptTemplate } from 'langchain/prompts'
import { GooglePaLM } from 'langchain/llms/googlepalm'
import { StructuredOutputParser } from 'langchain/output_parsers'
import { z } from 'zod'
import { Document } from 'langchain/document'
import { loadQARefineChain } from 'langchain/chains'
import { GooglePaLMEmbeddings } from 'langchain/embeddings/googlepalm'
import { MemoryVectorStore } from 'langchain/vectorstores/memory'

const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    mood: z
      .string()
      .describe('the mood of the person who wrote the journal entry.'),
    summary: z.string().describe('quick summary of the entire entry.'),
    subject: z.string().describe('the subject of the journal entry.'),
    negative: z
      .boolean()
      .describe(
        'is the journal entry negative? (i.e. does it contain negative emotions?).'
      ),
    color: z
      .string()
      .describe(
        'a hexidecimal color code that represents the mood of the entry. Example #0101fe for blue representing happiness.'
      ),
  })
)

const getPrompt = async (content) => {
  const formatInstructions = parser.getFormatInstructions()
  const prompt = new PromptTemplate({
    template:
      'Analyze the following journal entry. Follow the instructions and format your response to match the format instructions, no matter what! \n{format_instructions}\n{entry}',
    inputVariables: ['entry'],
    partialVariables: { format_instructions: formatInstructions },
  })

  const input = await prompt.format({
    entry: content,
  })

  return input
}

export const analyze = async (content) => {
  const input = await getPrompt(content)
  const model = new GooglePaLM({
    temperature: 1,
    modelName: 'models/text-unicorn-001',
  })

  const result = await model.call(input)
  // console.log(result)
  console.log(await parser.parse(result))
  try {
    return await parser.parse(result)
  } catch (e) {
    console.log(e)
  }
}

const qa = async (question, entries) => {
  const docs = entries.map((entry) => {
    return new Document({
      pageContent: entry.content,
      metadata: { id: entry.id, createdAt: entry.createdAt },
    })
  })

  const model = new GooglePaLM({
    temperature: 1,
    modelName: 'models/text-unicorn-001',
  })

  const chain = loadQARefineChain(model)
  const embeddings = new GooglePaLMEmbeddings()
  const store = await MemoryVectorStore.fromDocuments(docs, embeddings)
  const relevantDocs = await store.similaritySearch(question)
  const res = await chain.call({
    input_documents: relevantDocs,
    question,
  })

  return res.output_text
}

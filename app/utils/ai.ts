import { GooglePaLM } from 'langchain/llms/googlepalm'

export const analyze = async (prompt) => {
  const model = new GooglePaLM({
    temperature:1,
    modelName: "models/text-bison-001"
  })
  const result = await model.call(prompt)
  console.log(result)
}

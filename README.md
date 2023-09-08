# Mood Tracker App


## Description

The Mood Tracker App is a web application built with Next.js, TypeScript, Prisma, MongoDB, Tailwind CSS, and Langchain's Google PaLM LLM. It also incorporates Clerk as a sign-in/sign-up manager. This app is designed to help users monitor and manage their moods over time by providing various features for journaling, sentiment analysis, and mood tracking.

## Features

### Journaling
- Create and save journal entries.
- The AI reads your entries, saves them, and displays a summary.
- Analyzes the mood, subject, color, and sentiment score of each entry.

### AI Questioning
- Ask questions to the AI based on your journal entries.
- Receive answers and insights from the AI.

### Mood History
- Visualize your mood history with an interactive graph.
- View the dates and moods recorded for each day.

## Installation

To run this app locally, follow these steps:

1. Clone the repository: `git clone https://github.com/VictorJThomas/Mood-Tracker`
2. Navigate to the project directory: `cd mood`
3. Install dependencies: `npm install` or `yarn install`

## Configuration

Before running the app, you'll need to set up the following environment variables:

### In a `.env` file you will need:

- `DATABASE_URL`: MongoDB database connection URI.

### In a `.env.local` file you will need:
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: For public Clerk use
- `CLERK_SECRET_KEY`: Clerk frontend API key.

For Clerk browsing:
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in`
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/journal`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/new-user`

- `GOOGLE_PALM_API_KEY`: For Google PaLM LLM API key.


## Usage

1. Start the development server: `npm run dev` or `yarn dev`.
2. Access the app in your web browser at `http://localhost:3000`.


## Acknowledgments

- This app was created with the support of [Clerk](https://clerk.dev/).
- Special thanks to Langchain for their Google PaLM LLM integration.

## Contributing

Contributions are welcome! 
## Contact

For questions or feedback, please contact [Victor J. Thomas](mailto:victorjthomas10@gmail.com).

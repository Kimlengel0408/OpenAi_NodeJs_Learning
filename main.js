import dotenv from 'dotenv';
import OpenAI from "openai";

dotenv.config()

const openai = new OpenAI({
    apiKey: process.env.YOUR_API_KEY
})

async function main() {
    const response = await openai.models.list();
    console.log(response);
}

main()
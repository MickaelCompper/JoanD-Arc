import OpenAI from "openai";

const openai = new OpenAI();

export default async function main(country, level = difficile) {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: `Créer une énigme ${level} pour faire deviner un personnage historique lié au pays suivant : ${country}` }],
        model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0]);
}
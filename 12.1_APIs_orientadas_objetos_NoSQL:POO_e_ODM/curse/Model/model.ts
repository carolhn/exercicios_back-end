import { Schema, model } from 'mongoose';

interface Ipet {
    name: string;
    species: string;
    age?: number;
    weight: number;
    dailyMealsNumber: number;
}

const petSchema = new Schema<Ipet>({
  name: { type: String, required: true },
  species: { type: String, required: true },
  age: { type: Number, required: false },
  weight: { type: Number, required: true },
  dailyMealsNumber: { type: Number, required: true, min: 2, max: 5 },
});

// Criação da Model
const Pet = model<Ipet>('Pet', petSchema);

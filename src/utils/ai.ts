// src/utils/ai.ts

export const generateBehaviorSummary = async (behaviors: BehaviorObservation[]) => {
  const prompt = `Resuma el comportamiento de la mascota basado en las siguientes observaciones:\n${behaviors.map(b => `- ${b.comportamiento}`).join('\n')}`;

  const response = await fetch('https://tu-backend.com/api/generate-summary', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    throw new Error('Error al generar el resumen de comportamiento.');
  }

  const data = await response.json();
  return data.summary; // Asegúrate de que tu backend retorna el resumen en este campo
};

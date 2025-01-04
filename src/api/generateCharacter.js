export async function generateCharacter(description) {
  const response = await fetch('/api/generateCharacter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ description }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Error generating character.');
  }

  const data = await response.json();
  return data;
}
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  const body = await req.json ? await req.json() : null;
  if (!body) {
    res.status(400).send('No body');
    return;
  }

  try {
    const response = await fetch('https://hitools.pro/api/api2fa.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'cookie': 'PHPSESSID=isi-sess-id-di-sini',
        'origin': 'https://hitools.pro',
        'referer': 'https://hitools.pro/'
      },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
}

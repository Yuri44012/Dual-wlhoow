export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Only POST allowed');

  const { content } = req.body;
  if (!content) return res.status(400).json({ error: "Content is required" });

  const webhooks = [
    "https://discord.com/api/webhooks/1396832178171547668/2_sJo4OJWqSz5QK8do9sTysTzYSUKZqQ3HSwlvFyL1eyVPGjSWogqc2XlPscL0Whq5_1",
    "https://discord.com/api/webhooks/1304013032157876225/-l7rVxtnpnAj_4PTahg-1XZlVfZjQLPnf628udjdea_Eb1yZ4Pkta40tKnQNO-bBgjfE"
  ];

  for (const url of webhooks) {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content })
    });
  }

  return res.status(200).json({ status: "Message sent to both webhooks" });
}

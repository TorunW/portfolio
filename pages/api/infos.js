import { NextApiRequest, NextApiResponse } from 'next';
import { importDb } from '../../config/db';

export default async function getInfos(
  req = NextApiRequest,
  res = NextApiResponse
) {
  const db = await importDb();
  if (req.method === 'POST') {
    await db.run(
      'INSERT INTO aboutinfo(title, info_text) VALUES (?,?)',
      req.body.title,
      req.body.info_text
    );
  }
  let infos = await db.all('select * from aboutinfo');
  res.json(infos);
}

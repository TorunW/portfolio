import { NextApiRequest, NextApiResponse } from 'next';
import { importDb } from '../../../config/db';

export default async function getAboutinfoById(
  req = NextApiRequest,
  res = NextApiResponse
) {
  const db = await importDb();

  if (req.method === 'PUT') {
    await db.run(
      `update aboutinfo set title = ?, info_text = ? where id = ?`,
      req.body.title,
      req.body.info_text,
      req.query.id
    );
  }

  if (req.method === 'DELETE') {
    await db.run('delete from aboutinfo where id = ?', req.query.id);
  }

  let aboutinfo = await db.all('select * from aboutinfo where id = ?', [
    req.query.id,
  ]);
  res.json(aboutinfo);
}

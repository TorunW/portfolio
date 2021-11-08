import { NextApiRequest, NextApiResponse } from 'next';
import { importDb } from '../../../config/db';

export default async function getProjectById(
  req = NextApiRequest,
  res = NextApiResponse
) {
  const db = await importDb();

  if (req.method === 'PUT') {
    await db.run(
      `update project set title = ?, about = ?, mobile_image = ?, tablet_image = ?, desktop_image = ?, website_link = ?, git_link = ? where id = ?`,
      req.body.title,
      req.body.about,
      req.body.mobile_image,
      req.body.tablet_image,
      req.body.desktop_image,
      req.body.website_link,
      req.body.git_link,
      req.query.id
    );
  }

  if (req.method === 'DELETE') {
    await db.run('delete from project where id = ?', req.query.id);
  }

  let project = await db.all('select * from project where id = ?', [
    req.query.id,
  ]);
  res.json(project);
}

import { NextApiRequest, NextApiResponse } from 'next';
import { importDb } from '../../config/db';

export default async function getProjects(
  req = NextApiRequest,
  res = NextApiResponse
) {
  const db = await importDb();
  if (req.method === 'POST') {
    await db.run(
      'INSERT INTO project(title, about, mobile_image, tablet_image, desktop_image, website_link, git_link) VALUES (?,?,?,?,?,?,?)',
      req.body.title,
      req.body.about,
      req.body.mobile_image,
      req.body.tablet_image,
      req.body.desktop_image,
      req.body.website_link,
      req.body.git_link
    );
  }
  let projects = await db.all('select * from project');
  res.json(projects);
}

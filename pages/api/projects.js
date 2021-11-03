import { NextApiRequest, NextApiResponse } from 'next';
import { importDb } from '../../config/db';

export default async function getProjects(
  req = NextApiRequest,
  res = NextApiResponse
) {
  const db = await importDb();

  let projects = await db.all('select * from project');
  res.json(projects);
}

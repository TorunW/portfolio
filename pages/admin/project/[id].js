import { importDb } from '../../../config/db';
import ProjectForm from '../../../components/ProjectForm';

const projectView = ({ project }) => {
  async function onSave(res) {
    console.log(res, 'res');
  }

  return (
    <div>
      <div>
        <ProjectForm type={'edit'} project={project} onSubmit={onSave} />
      </div>
    </div>
  );
};

export default projectView;

export const getServerSideProps = async (context) => {
  const db = await importDb();
  const project = await db.get('select * from project where id = ?', [
    context.params.id,
  ]);
  return { props: { project } };
};

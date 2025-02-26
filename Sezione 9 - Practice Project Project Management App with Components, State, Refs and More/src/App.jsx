import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, // undefined => schermata "NoProjectSelected"
    projects: [], // rinominato da "project" a "projects" per chiarezza
    tasks: [],
  });

  // -----------------------------------------
  // AGGIUNTA DI UN TASK
  // -----------------------------------------
  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId, // "collega" il task al progetto selezionato
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  // -----------------------------------------
  // SELEZIONE DI UN PROGETTO ESISTENTE
  // -----------------------------------------
  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  // -----------------------------------------
  // SCHERMATA "NUOVO PROGETTO"
  // -----------------------------------------
  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null, // null => apri form "NewProject"
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined, // torna a "NoProjectSelected"
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        // Imposta il nuovo progetto come selezionato,
        // in modo da rimanere subito in quel progetto
        selectedProjectId: projectId,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  // -----------------------------------------
  // INDIVIDUA IL PROGETTO SELEZIONATO
  // -----------------------------------------
  const selectedProject = projectsState.projects.find(
    (p) => p.id === projectsState.selectedProjectId
  );

  // Filtra i task per il progetto selezionato
  const tasksForSelectedProject = projectsState.tasks.filter(
    (task) => task.projectId === projectsState.selectedProjectId
  );

  // -----------------------------------------
  // CANCELLAZIONE DI UN PROGETTO
  // -----------------------------------------
  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined, // Torna allo stato "Nessun progetto selezionato"
        projects: prevState.projects.filter(
          (proj) => proj.id !== prevState.selectedProjectId
        ),
        tasks: prevState.tasks.filter(
          (task) => task.projectId !== prevState.selectedProjectId
        ),
      };
    });
  }

  // -----------------------------------------
  // DETERMINA COSA MOSTRARE A DESTRA
  // -----------------------------------------
  let content;

  // se selectedProjectId === null => form per aggiungere progetto
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
    // se selectedProjectId === undefined => Nessun progetto selezionato
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
    // altrimenti, abbiamo un progetto selezionato
  } else {
    content = (
      <SelectedProject
        project={selectedProject}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={tasksForSelectedProject}
      />
    );
  }

  // -----------------------------------------
  // RENDER
  // -----------------------------------------
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;

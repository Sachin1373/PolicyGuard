
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
// import SlackIcon from '@mui/icons-material/Slack';
import EventNoteIcon from '@mui/icons-material/EventNote';
import BugReportIcon from '@mui/icons-material/BugReport';
import NoteIcon from '@mui/icons-material/Note';

export const applications = [
  {
    id: 'github',
    icon: <GitHubIcon />,
    title: 'GitHub',
    description: 'Code repository and version control',
    connected: false,
    data: '',
    users: '2 users',
  },
  {
    id: 'slack',
    icon: <EventNoteIcon />,
    title: 'Slack',
    description: 'Team communication and collaboration',
    connected: false,
    data: '',
    users: '3 users',
  },
  {
    id: 'google',
    icon: <GoogleIcon />,
    title: 'Google Workspace',
    description: 'Email, docs, and productivity suite',
    connected: false,
    data: '',
    users: '3 users',
  },
  {
    id: 'jira',
    icon: <BugReportIcon />,
    title: 'Jira',
    description: 'Project management and issue tracking',
    connected: false,
    data: '',
    users: '3 users',
  },
  {
    id: 'notion',
    icon: <NoteIcon />,
    title: 'Notion',
    description: 'All-in-one workspace for notes and docs',
    connected: false,
    data: '',
    users: '3 users',
  },
]
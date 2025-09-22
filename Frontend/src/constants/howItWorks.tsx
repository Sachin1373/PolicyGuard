import ConnectIcon from '@mui/icons-material/Hub';   // adjust if you use a different icon
import ShieldIcon from '@mui/icons-material/Shield';
import PeopleIcon from '@mui/icons-material/People';
import CheckIcon from '@mui/icons-material/Check';

export const steps = [
  {
    icon: (
      <ConnectIcon
        sx={{
          fontSize: { xs: '2.5rem', sm: '2.75rem', md: '3rem' },
          color: '#22c55e',
        }}
      />
    ),
    title: 'Connect Apps',
    description: 'Integrate with GitHub, Slack, Jira, and other tools your team uses',
  },
  {
    icon: (
      <ShieldIcon
        sx={{
          fontSize: { xs: '2.5rem', sm: '2.75rem', md: '3rem' },
          color: '#22c55e',
        }}
      />
    ),
    title: 'Create Roles',
    description: 'Define roles with specific permissions and entitlements',
  },
  {
    icon: (
      <PeopleIcon
        sx={{
          fontSize: { xs: '2.5rem', sm: '2.75rem', md: '3rem' },
          color: '#22c55e',
        }}
      />
    ),
    title: 'Assign Users',
    description: 'Automatically provision access based on user roles',
  },
  {
    icon: (
      <CheckIcon
        sx={{
          fontSize: { xs: '2.5rem', sm: '2.75rem', md: '3rem' },
          color: '#22c55e',
        }}
      />
    ),
    title: 'Track Compliance',
    description: 'Monitor access logs and generate compliance reports',
  },
];

import ShieldIcon from '@mui/icons-material/Shield';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import LockIcon from '@mui/icons-material/Lock';

export const features = [
  {
    icon: (
      <ShieldIcon
        sx={{
          fontSize: { xs: '2rem', sm: '2.25rem', md: '2.5rem' },
          color: '#22c55e',
        }}
      />
    ),
    title: 'Role Management',
    description: 'Create roles and assign entitlements easily',
  },
  {
    icon: (
      <SettingsIcon
        sx={{
          fontSize: { xs: '2rem', sm: '2.25rem', md: '2.5rem' },
          color: '#22c55e',
        }}
      />
    ),
    title: 'Automated Provisioning',
    description: 'Connect apps like GitHub, Slack, Jira',
  },
  {
    icon: (
      <ReportIcon
        sx={{
          fontSize: { xs: '2rem', sm: '2.25rem', md: '2.5rem' },
          color: '#22c55e',
        }}
      />
    ),
    title: 'Compliance Reports',
    description: 'Audit logs & downloadable reports',
  },
  {
    icon: (
      <LockIcon
        sx={{
          fontSize: { xs: '2rem', sm: '2.25rem', md: '2.5rem' },
          color: '#22c55e',
        }}
      />
    ),
    title: 'Secure Access',
    description: 'Enterprise-grade security and access controls',
  },
];

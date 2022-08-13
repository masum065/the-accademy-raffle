import { Box, Typography } from '@mui/material';

interface Props {
  info: IInfo;
}
interface IInfo {
  title: string;
  count: string | number;
  icon: string;
}
export const Card = ({ info }: Props) => {
  const { title, count, icon } = info;

  return (
    <Box
      sx={{
        padding: '10px 20px',
        borderRadius: '0px',
        border: '1px solid rgb(255 255 255 / 29%)',
        backgroundColor: 'rgb(0 0 0 / 56%)',
      }}
    >
      <Typography
        sx={{
          color: '#bdbdbd',
          fontWeight: '600',
          fontSize: '0.9rem',
        }}
      >
        {title}
      </Typography>

      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        {icon && <Box sx={{ maxWidth: '28px' }} src={icon} component='img' />}
        <Typography
          sx={{
            padding: '5px 0',
            fontSize: '22px',
            fontWeight: '700',
            color: '#fff',
          }}
        >
          {count}
        </Typography>
      </Box>
    </Box>
  );
};

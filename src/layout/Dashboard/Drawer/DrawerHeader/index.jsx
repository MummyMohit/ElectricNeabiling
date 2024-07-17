import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';
import Logo from 'components/logo';

import { neabil } from 'pic/pic';
// ==============================|| DRAWER HEADER ||============================== //

export default function DrawerHeader({ open }) {
  const theme = useTheme();

  return (
    <DrawerHeaderStyled theme={theme} open={!!open}>
      {/* <Logo isIcon={!open} sx={{ width: open ? 'auto' : 35, height: 35 }} /> */}
     
      <img src={neabil}
      width="261px"
      height="216px"
      style={{marginLeft:"-44px",marginTop:"-31px"}}
      />
    </DrawerHeaderStyled>
  );
}

DrawerHeader.propTypes = { open: PropTypes.bool };

import { Box, Button } from "@mui/material";
import { headerList } from "../../Constant";
import styles from "./styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box component="img" src="/logoImage.png" className="logo" />

      <Box sx={styles.navContent}>
        {headerList.map((item, idx) => (
          <Box>
            <Box key={idx} className="nav-item">
              {item}
              {idx === 0 || idx === 1 || idx === 4 ? (
                <KeyboardArrowDownIcon className="icon" />
              ) : (
                <></>
              )}
            </Box>
          </Box>
        ))}
      </Box>

      <Box>
        <Button sx={styles.signIn}>Sign In</Button>
        <Button sx={styles.signOut}>Sign Up</Button>
      </Box>
    </Box>
  );
};

export default Header;

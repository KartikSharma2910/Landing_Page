import { Box } from "@mui/system";
import styles from "./styles";

const Footer = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.footerWrap}>
        <Box>Privacy Policy | Terms of Uses | Sitemap</Box>
        <Box>© copyright 2022 Kartik Sharma</Box>
      </Box>
    </Box>
  );
};

export default Footer;

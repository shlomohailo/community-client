import { Box, useTheme } from "@mui/material";

import GeographyChart from "../../dashboard/GeographyChart";
import Header from "../Header";
import { tokens } from "../../../../theme";
import DashboardSidebar from "../../../features/dashboard-sidebar/dashboard-sidebar";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
<DashboardSidebar/>
      <Header title="Geography" subtitle="Simple Geography Chart" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;

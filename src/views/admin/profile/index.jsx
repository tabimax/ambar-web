import { Box, Grid } from "@chakra-ui/react";
import Banner from "views/admin/profile/components/Banner";
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatar4.jpg";
import ColumnsTable from "views/admin/dataTables/components/ColumnsTable";
import { columnsDataColumns } from "views/admin/dataTables/variables/columnsData";
import tableDataColumns from "views/admin/dataTables/variables/tableDataColumns.json";
import tableDataCheck from "views/admin/dataTables/variables/tableDataCheck.json";

export default function Overview() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {}
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "1.34fr 1fr 1.62fr",
        }}
        templateRows={{
          base: "repeat(3, 1fr)",
          lg: "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}>
        <Banner
          gridArea='1 / 1 / 2 / 2'
          banner={banner}
          avatar={avatar}
          name='blaze#4135'
          job=' '
          badges='1'
          ambar='1'
          verified='true'
        />
         <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        />
        <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataCheck}
        />
      </Grid>
    </Box>
  );
}

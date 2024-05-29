import {
  Box,
  Card,
  CardContent,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { useStoreProfile } from "../../store/store";
import { WorkspacePremium } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ResultComponent = ({
  oldBill,
  newBill,
  savingsPercentage,
  amortiYil,
  toplamMaliyet,
  onerilen,
}) => {
  const profile = useStoreProfile((state) => state.profile);
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      sx={{ width: { xs: "100%", sm: "90%" } }}
      justifyContent="center"
      alignItems="center"
    >
      <Card
        variant="outlined"
        style={{
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "rgba(208,224,204,255)",
        }}
      >
        <CardContent>
          <Typography
            variant="body1"
            fontWeight={500}
            fontSize={24}
            lineHeight={1}
            sx={{ color: "#496642" }}
            gutterBottom
          >
            Enerji Tasarrufu Sonucu
          </Typography>
          <Typography
            variant="body1"
            fontWeight={500}
            fontSize={20}
            lineHeight={1}
            sx={{ color: "#496642", lineBreak: "auto" }}
            gutterBottom
          >
            Yeni evinizin ekipmanlarına göre oluşturulan faturanız, eski
            faturanıza kıyasla {(+savingsPercentage).toFixed(2)}% oranında daha
            tasarruflu çıktı.
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label="energy-saving-results">
              <TableHead>
                <TableRow>
                  <TableCell component="th" align="center" scope="row">
                    Eski Fatura Tutarı
                  </TableCell>
                  <TableCell component="th" align="center" scope="row">
                    Yeni Fatura Tutarı
                  </TableCell>
                  <TableCell component="th" align="center" scope="row">
                    Tasarruf Oranı
                  </TableCell>
                  <TableCell component="th" align="center" scope="row">
                    Tasarruf Miktarı
                  </TableCell>

                  <TableCell component="th" align="center" scope="row">
                    Amorti Süresi (Yıl)
                  </TableCell>
                  <TableCell component="th" align="center" scope="row">
                    Toplam Maliyet
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">
                    {(+oldBill).toFixed(2)} ₺
                  </TableCell>
                  <TableCell align="center">
                    {(+newBill).toFixed(2)} ₺
                  </TableCell>
                  <TableCell align="center">
                    {(+savingsPercentage).toFixed(2)}%
                  </TableCell>
                  <TableCell align="center">
                    {(+oldBill - +newBill).toFixed(2)} ₺
                  </TableCell>
                  {profile?.userDetails?.isPremium ? (
                    <>
                      <TableCell align="center">{amortiYil}</TableCell>
                      <TableCell align="center">{toplamMaliyet} ₺</TableCell>
                    </>
                  ) : (
                    <>
                      <TableCell align="center">
                        <Tooltip title="Premium olun !">
                          <IconButton
                            onClick={() => {
                              navigate("/pricing");
                            }}
                          >
                            <WorkspacePremium />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                      <TableCell align="center">
                        <Tooltip title="Premium olun !">
                          <IconButton
                            onClick={() => {
                              navigate("/pricing");
                            }}
                          >
                            <WorkspacePremium />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </>
                  )}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          {profile?.userDetails?.isPremium && (
            <Paper elevation={12}>
              <TableContainer
                component={Paper}
                sx={{ mt: 2 }}
                square
                elevation={0}
              >
                <Table aria-label="energy-saving-results">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        component="th"
                        align="center"
                        colSpan={4}
                        scope="row"
                      >
                        ÖNERİLEN DEĞİŞİKLİKLER
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      {onerilen?.malzemeler.map((malzemeAdi) => (
                        <TableCell
                          key={malzemeAdi.categoryName}
                          component="th"
                          align="center"
                          scope="row"
                        >
                          {malzemeAdi?.categoryName}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      {onerilen?.malzemeler.map((malzemeAdi) => (
                        <TableCell align="center">
                          {malzemeAdi?.product?.entityName}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <TableContainer component={Paper} elevation={0} square>
                <Table aria-label="energy-saving-results">
                  <TableHead>
                    <TableRow>
                      <TableCell component="th" align="center" scope="row">
                        Eski Fatura Tutarı
                      </TableCell>
                      <TableCell component="th" align="center" scope="row">
                        Yeni Fatura Tutarı
                      </TableCell>
                      <TableCell component="th" align="center" scope="row">
                        Tasarruf Oranı
                      </TableCell>
                      <TableCell component="th" align="center" scope="row">
                        Tasarruf Miktarı
                      </TableCell>
                      <TableCell component="th" align="center" scope="row">
                        Amorti Süresi (Yıl)
                      </TableCell>
                      <TableCell component="th" align="center" scope="row">
                        Toplam Maliyet
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">
                        {(+oldBill).toFixed(2)} ₺
                      </TableCell>
                      <TableCell align="center">
                        {(+onerilen?.sonuc?.newBill).toFixed(2)} ₺
                      </TableCell>
                      <TableCell align="center">
                        {Math.abs(
                          (+onerilen?.sonuc?.savingPercentage).toFixed(2)
                        )}
                        %
                      </TableCell>
                      <TableCell align="center">
                        {(+oldBill - +onerilen?.sonuc?.newBill).toFixed(2)} ₺
                      </TableCell>
                      <TableCell align="center">
                        {onerilen?.sonuc?.amortiYil}
                      </TableCell>
                      <TableCell align="center">
                        {onerilen?.sonuc?.toplamMaliyet} ₺
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          )}
        </CardContent>
        <Typography variant="body2" flex>
          * Tüm hesaplamalar 2024 Mayıs ayına göre belirlenmiştir.
        </Typography>
      </Card>
    </Box>
  );
};

export default ResultComponent;

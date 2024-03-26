import { Grid, Paper } from "@mui/material";
import React from "react";
import MonthSelector from "../components/8MonthSelector";
import CategoryChart from "../components/6CategoryChart";
import TransactionTable from "../components/12TransactionTable";
import BarChart from "../components/3BarChart";
import { Transaction } from "../types/17index";

interface ReportProps {
  monthlyTransactions: Transaction[];
  currentMonth: Date;
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>; //追加
  onDeleteTransaction: (ids: string | readonly string[]) => Promise<void>;
  isLoading: boolean;
}

const Report = ({
  monthlyTransactions,
  currentMonth,
  setCurrentMonth,
  onDeleteTransaction,
  isLoading,
}: ReportProps) => {
  const commonPaperStyle = {
    height: "400px",
    display: "flex",
    flexDirection: "column",
    p: 2,
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {/* 日付選択エリア */}
        <MonthSelector
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper sx={commonPaperStyle}>
          {/* 円グラフ */}
          <CategoryChart
            monthlyTransactions={monthlyTransactions}
            isLoading={isLoading}
          />
        </Paper>
      </Grid>

      <Grid item xs={12} md={8}>
        <Paper sx={commonPaperStyle}>
          {/* 棒グラフ */}
          <BarChart
            monthlyTransactions={monthlyTransactions}
            isLoading={isLoading}
          />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        {/* テーブル */}
        <TransactionTable
          monthlyTransactions={monthlyTransactions}
          onDeleteTransaction={onDeleteTransaction}
        />
      </Grid>
    </Grid>
  );
};

export default Report;
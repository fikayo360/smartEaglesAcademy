
"use client";

import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const monthlyData = [
  { month: "Jan", resolved: 24, replied: 38 },
  { month: "Feb", resolved: 31, replied: 45 },
  { month: "Mar", resolved: 28, replied: 42 },
  { month: "Apr", resolved: 36, replied: 51 },
  { month: "May", resolved: 33, replied: 48 },
  { month: "Jun", resolved: 41, replied: 57 },
  { month: "Jul", resolved: 29, replied: 44 },
  { month: "Aug", resolved: 38, replied: 52 },
  { month: "Sep", resolved: 45, replied: 63 },
  { month: "Oct", resolved: 27, replied: 39 },
  { month: "Nov", resolved: 0, replied: 0 },
  { month: "Dec", resolved: 0, replied: 0 },
];

const chartConfig = {
  resolved: {
    label: "Tickets resolved",
    color: "var(--chart-1)",
  },
  replied: {
    label: "Tickets replied to",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

type Period = "7days" | "30days" | "6months" | "year";

export function TicketPerformanceChart() {
  const [period, setPeriod] = useState<Period>("year");

  const chartData = useMemo(() => {
    if (period === "year") {
      // Illustrative year-to-date data.
      // Replace with API data in production.
      return monthlyData.slice(0, 10);
    }

    if (period === "6months") {
      return monthlyData.slice(4, 10);
    }

    // Sample daily data for shorter reporting periods.
    const days =
      period === "7days"
        ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        : Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);

    return days.map((day, index) => ({
      month: day,
      resolved: (index * 3 + 2) % 9,
      replied: (index * 5 + 4) % 12,
    }));
  }, [period]);

  const description =
    period === "year"
      ? "Monthly ticket activity for the current year"
      : period === "6months"
        ? "Ticket activity over the last six months"
        : period === "30days"
          ? "Ticket activity over the last 30 days"
          : "Ticket activity over the last seven days";

  return (
    <Card>
      <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <CardTitle>Ticket Performance</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>

        <Select
          value={period}
          onValueChange={(value) => setPeriod(value as Period)}
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7days">Last 7 days</SelectItem>
            <SelectItem value="30days">Last 30 days</SelectItem>
            <SelectItem value="6months">Last 6 months</SelectItem>
            <SelectItem value="year">Year to date</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="h-[400px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 8, right: 8, left: -16, bottom: 0 }}
          >
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fontSize: 12 }}
              interval={period === "30days" ? 4 : 0}
            />

            <YAxis
              allowDecimals={false}
              tickLine={false}
              axisLine={false}
              width={36}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />

            <ChartLegend content={<ChartLegendContent />} />

            <Bar
              dataKey="resolved"
              fill="var(--color-resolved)"
              radius={[4, 4, 0, 0]}
            />

            <Bar
              dataKey="replied"
              fill="var(--color-replied)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

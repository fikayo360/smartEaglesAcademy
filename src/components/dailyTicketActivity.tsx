
"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
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
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const dailyTicketData = [
  { day: "Mon", resolved: 5 },
  { day: "Tue", resolved: 7 },
  { day: "Wed", resolved: 4 },
  { day: "Thu", resolved: 8 },
  { day: "Fri", resolved: 6 },
  { day: "Sat", resolved: 1 },
  { day: "Sun", resolved: 0 },
];

const chartConfig = {
  resolved: {
    label: "Tickets resolved",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function DailyTicketActivityChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Ticket Activity</CardTitle>
        <CardDescription>
          Tickets resolved over the last 7 days
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="h-[400px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={dailyTicketData}
            margin={{
              top: 8,
              right: 12,
              left: -16,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
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

            <Line
              dataKey="resolved"
              type="monotone"
              stroke="var(--color-resolved)"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

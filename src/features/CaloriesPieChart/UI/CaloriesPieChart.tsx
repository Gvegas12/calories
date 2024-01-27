import { FC } from "react";

import { ResponsivePie } from "@nivo/pie";

import mock_data from "./mock_data.json";

interface CaloriesPieChartProps {
	className?: string;
}

export const CaloriesPieChart: FC<CaloriesPieChartProps> = () => {
	return (
		<div style={{ height: "50dvh" }}>
			<ResponsivePie
				data={mock_data}
				margin={{ top: 40, right: 60, bottom: 40, left: 60 }}
				innerRadius={0.5}
				activeOuterRadiusOffset={8}
				colors={{ scheme: "greens" }}
				borderWidth={1}
				borderColor={{
					from: "color",
					modifiers: [["darker", 0.2]],
				}}
				// enableArcLinkLabels={false}
				arcLinkLabelsOffset={-11}
				arcLinkLabelsSkipAngle={10}
				arcLinkLabelsTextColor="#333333"
				arcLinkLabelsThickness={2}
				arcLinkLabelsColor={{ from: "color" }}
				arcLabelsSkipAngle={10}
				arcLabelsTextColor={{
					from: "color",
					modifiers: [["darker", 2]],
				}}
				defs={[
					{
						id: "dots",
						type: "patternDots",
						background: "inherit",
						color: "rgba(255, 255, 255, 0.3)",
						size: 4,
						padding: 1,
						stagger: true,
					},
					{
						id: "lines",
						type: "patternLines",
						background: "inherit",
						color: "rgba(255, 255, 255, 0.3)",
						rotation: -45,
						lineWidth: 6,
						spacing: 10,
					},
				]}
				fill={[
					{
						match: {
							id: "ruby",
						},
						id: "dots",
					},
					{
						match: {
							id: "c",
						},
						id: "dots",
					},
					{
						match: {
							id: "go",
						},
						id: "dots",
					},
					{
						match: {
							id: "python",
						},
						id: "dots",
					},
					{
						match: {
							id: "scala",
						},
						id: "lines",
					},
					{
						match: {
							id: "lisp",
						},
						id: "lines",
					},
					{
						match: {
							id: "elixir",
						},
						id: "lines",
					},
					{
						match: {
							id: "javascript",
						},
						id: "lines",
					},
				]}
				legends={[]}
			/>
		</div>
	);
};

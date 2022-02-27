import React, { FunctionComponent, useMemo } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import Svg, {
  Circle,
  G,
  SvgProps,
  CircleProps,
  GProps,
} from 'react-native-svg';

export type dataItem = {
  color: string;
  count: number;
  key: string;
};

type filledDataItem = dataItem & {
  percentage: number;
  strokeDashoffset: number;
  angle: number;
};

const defaultProps = {
  rotation: -90,
  length: 150,
  zeroTotalCircleColor: '#F1F6F9',
  containerProps: {},
  svgProps: {},
  gProps: {},
  circleProps: {},
};

export type PieChartProps = {
  data: dataItem[];
  length?: number;
  rotation?: number;
  zeroTotalCircleColor?: string;
  containerProps?: ViewProps;
  svgProps?: SvgProps;
  gProps?: GProps;
  circleProps?: CircleProps;
} & typeof defaultProps;

const CircleWrapper = (props: CircleProps) => (
  <Circle
    cx="50%"
    cy="50%"
    fill="transparent"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);

const PieChartComponent: FunctionComponent<PieChartProps> = ({
  data,
  length,
  rotation,
  zeroTotalCircleColor,
  containerProps,
  svgProps,
  gProps,
  circleProps,
}) => {
  const { strokeWidth, radius, circleCircumference } = useMemo(() => {
    const newStrokeWidth = length * 0.25;
    const newRadius = length / 2 - newStrokeWidth / 2;
    return {
      strokeWidth: newStrokeWidth,
      radius: newRadius,
      circleCircumference: 2 * Math.PI * newRadius,
    };
  }, [length]);

  const { total, filledData } = useMemo(() => {
    const newTotal = data.reduce((prev, current) => prev + current.count, 0);

    const newFilledData = data.reduce<filledDataItem[]>((prev, current, i) => {
      const percentage = (current.count / newTotal) * 100;
      prev.push({
        ...current,
        percentage,
        strokeDashoffset:
          circleCircumference - (circleCircumference * percentage) / 100,
        angle:
          (i === 0 ? 0 : prev[i - 1].angle) + (current.count / newTotal) * 360,
      });
      return prev;
    }, []);

    return {
      total: newTotal,
      filledData: newFilledData,
    };
  }, [circleCircumference, data]);

  return (
    <View
      style={styles.container}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...containerProps}
    >
      <Svg
        height={length.toString()}
        width={length.toString()}
        viewBox={`0 0 ${length} ${length}`}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...svgProps}
      >
        <G
          rotation={rotation}
          originX={length / 2}
          originY={length / 2}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...gProps}
        >
          {total === 0 ? (
            <CircleWrapper
              r={radius}
              stroke={zeroTotalCircleColor}
              strokeWidth={strokeWidth}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...circleProps}
            />
          ) : (
            filledData.map((item, i, arr) => (
              <CircleWrapper
                key={item.key}
                r={radius}
                stroke={item.color}
                strokeWidth={strokeWidth}
                strokeDasharray={circleCircumference}
                strokeDashoffset={item.strokeDashoffset}
                rotation={i === 0 ? 0 : arr[i - 1].angle}
                originX={length / 2}
                originY={length / 2}
                strokeLinecap="round"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...circleProps}
              />
            ))
          )}
        </G>
      </Svg>
    </View>
  );
};

PieChartComponent.defaultProps = defaultProps;

export const PieChart = React.memo(PieChartComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

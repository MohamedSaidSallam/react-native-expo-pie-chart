import React, { useMemo } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';

const PieChart = ({ data, length, rotation, zeroTotalCircleColor }) => {
  const strokeWidth = length * 0.25;
  const radius = length / 2 - strokeWidth / 2;
  const circleCircumference = useMemo(() => 2 * Math.PI * radius, [radius]);
  const total = useMemo(
    () => data.reduce((prev, current) => prev + current.count, 0),
    [data]
  );
  const filledData = useMemo(
    () =>
      data.reduce((prev, current, i) => {
        const percentage = (current.count / total) * 100;
        prev.push({
          ...current,
          percentage,
          strokeDashoffset:
            circleCircumference - (circleCircumference * percentage) / 100,
          angle:
            (i === 0 ? 0 : prev[i - 1].angle) + (current.count / total) * 360,
        });
        return prev;
      }, []),
    [data]
  );

  return (
    <View style={styles.container}>
      <View style={styles.graphWrapper}>
        <Svg
          height={length.toString()}
          width={length.toString()}
          viewBox={`0 0 ${length} ${length}`}
        >
          <G rotation={rotation} originX={length / 2} originY={length / 2}>
            {total === 0 ? (
              <Circle
                cx="50%"
                cy="50%"
                r={radius}
                stroke={zeroTotalCircleColor}
                fill="transparent"
                strokeWidth={strokeWidth}
              />
            ) : (
              filledData.map((item, i, arr) => (
                <Circle
                  key={item.key}
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke={item.color}
                  fill="transparent"
                  strokeWidth={strokeWidth}
                  strokeDasharray={circleCircumference}
                  strokeDashoffset={item.strokeDashoffset}
                  rotation={i === 0 ? 0 : arr[i - 1].angle}
                  originX={length / 2}
                  originY={length / 2}
                  strokeLinecap="round"
                />
              ))
            )}
          </G>
        </Svg>
      </View>
    </View>
  );
};

PieChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      key: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  rotation: PropTypes.number,
  length: PropTypes.number,
  zeroTotalCircleColor: PropTypes.string,
};
PieChart.defaultProps = {
  rotation: -90,
  length: 150,
  zeroTotalCircleColor: '#F1F6F9',
};

export default React.memo(PieChart);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  graphWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

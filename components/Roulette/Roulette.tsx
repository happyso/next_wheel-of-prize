"use client";

import WheelComponent from "@/components/WheelComponent/WheelComponent";

export default function Roulette() {
  const segments = ["Happy", "Angry", "Sad", "Frustration", "Emptyness"];
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    // "#34A24F",
    // "#F9AA1F",
    // "#EC3F3F",
    "#FF9000",
  ];
  const onFinished = (winner: string) => {
    console.log(winner);
  };
  return (
    <div className="App">
      <div id="wheelCircle">
        <WheelComponent
          segments={segments}
          segColors={segColors}
          winningSegment=""
          onFinished={(winner) => onFinished(winner)}
          primaryColor="black"
          primaryColoraround="#ffffffb4"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={190}
          upDuration={50}
          downDuration={2000}
        />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Text, View, Button } from "react-native";

const StateProps = () => {
	const [pressCount, setPressCount] = useState(0);
	return (
		<View
			style={{
				alignItems: "center",
				marginTop: 20,
			}}
		>
			<Text>You've pressed the button: {pressCount} time(s)</Text>
			<Button
				title={`Pressed ${pressCount} time(s)`}
				onPress={() => setPressCount(pressCount + 1)}
			/>
		</View>
	);
};
export default StateProps;
interface DateObject {
	calendar: {
		[key: string]: any;
		identifier: string;
	};
	day: number;
	era: string;
	month: number;
	year: number;
}

export function convertToDateString(dateObject: DateObject) {
	const { year, month, day } = dateObject;

	// Pad the month and day with leading zeros if necessary
	const paddedMonth = String(month).padStart(2, "0");
	const paddedDay = String(day).padStart(2, "0");

	// Construct the date string
	const dateString = `${year}-${paddedMonth}-${paddedDay}`;

	return dateString;
}

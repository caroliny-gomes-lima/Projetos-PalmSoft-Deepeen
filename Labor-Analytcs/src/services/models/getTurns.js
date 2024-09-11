import { Console } from "../../lib";

export default function getTurns(response) {
  if (response.ok) {
    try {
      const data = response.data.map((item) => {
        return {
          createDate: item.createDate,
          id: item.id,
          invalidHoursSaturday: item.invalidHoursSaturday,
          invalidHoursSunday: item.invalidHoursSunday,
          invalidHoursWeek: item.invalidHoursWeek,
          shift: item.shift,
          timeSaturdayEnd: item.timeSaturdayEnd ? item.timeSaturdayEnd : null,
          timeSaturdayStart: item.timeSaturdayStart
            ? item.timeSaturdayStart
            : null,
          timeSundayEnd: item.timeSundayEnd ? item.timeSundayEnd : null,
          timeSundayStart: item.timeSundayStart ? item.timeSundayStart : null,
          timeWeekEnd: item.timeWeekEnd ? item.timeWeekEnd : null,
          timeWeekStart: item.timeWeekStart ? item.timeWeekStart : null,
          workShiftEndDate: item.workShiftEndDate
            ? item.workShiftEndDate
            : null,
          workShiftStartDate: item.workShiftStartDate
            ? item.workShiftStartDate
            : null,
          workShiftStatus: item.workShiftStatus === 1 ? "Ativo" : "Desativo",
          workShiftStatusCode: item.workShiftStatus,
        };
      });
      return data;
    } catch (e) {
      //Colocar o path da API
      Console.errorParseResponse("/s");
      return { ...response, ok: false };
    }
  } else {
    return response;
  }
}

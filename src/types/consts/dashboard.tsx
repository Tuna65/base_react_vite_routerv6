import {
  IconClose,
  IconList,
  IconReload,
  IconSuccess,
} from "../../assets/Icon";

export const contentHeaders = (item: any) => {
  return [
    {
      total: item?.totalAccountStudent,
      title: "Tổng số sinh viên",
      icon: (
        <span className="icon-all">
          <IconList />
        </span>
      ),
    },
    {
      total: item?.totalFormSuccesss,
      title: "Hoàn thành",
      icon: (
        <span className="icon-success">
          <IconSuccess />
        </span>
      ),
    },
    {
      total: item?.totalAwaitTeacher,
      title: "Chờ đánh giá",
      icon: (
        <span className="icon-pendding">
          <IconReload />
        </span>
      ),
    },
    {
      total: item?.totalFormUnfinished,
      title: "Chưa đánh giá",
      icon: (
        <span className="icon-cancel">
          <IconClose />
        </span>
      ),
    },
  ];
};

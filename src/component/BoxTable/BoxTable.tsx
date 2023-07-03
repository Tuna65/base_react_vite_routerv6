import { useEffect, useState } from "react";
import "./BoxTable.scss";
import { Pagination } from "react-bootstrap";

type BoxTableProps = {
  titles: string[];
  dataSize?: number[] | string[];
  dataFormat?: string[];
  dataMappingArray: (item: any, idx: number) => any[];
  items: any;
};

function BoxTable(props: BoxTableProps) {
  const { titles, dataSize, dataFormat, dataMappingArray, items } = props;
  const [listItem, setListItem] = useState<any[]>([]);

  const mapData = (data: any[]) => {
    return data?.map((item, index) => {
      return dataMappingArray(item, index);
    });
  };

  useEffect(() => {
    setListItem(mapData(items));
    return () => {
      setListItem([]);
    };
  }, [items]);
  return (
    <div className="box-table">
      <table className="table">
        <thead>
          <tr>
            {titles.map((title, index) => (
              <th
                key={`title-table-${index}`}
                className={dataFormat ? dataFormat[index] : "text-left"}
                style={{ width: dataSize ? dataSize[index] : "" }}
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {listItem?.map((item, index) => (
            <tr key={`row-table-${index}`} className={index % 2 == 0 ? "" : "bg"}>
              {item.map((i: any, idx: number) => (
                <td
                  key={`item-table-${idx}`}
                  className={dataFormat ? dataFormat[idx] : "text-left"}
                >
                  {i}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}

export default BoxTable;

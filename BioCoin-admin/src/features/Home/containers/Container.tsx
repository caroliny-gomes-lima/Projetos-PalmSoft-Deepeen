import React from "react";
import Styles from "../styles/Styles";
import { Dashboard } from "../components";
import { hooks } from "../../../utils";
import { api } from "../../../services";
import { errorModal } from "../../../components/modals/utils";

function Container() {
  const [isMounted, setMount] = React.useState<boolean>(false);
  const [dashData, setDashData] = React.useState<any>(null);
  const [PreservedAreasData, setPreservedAreasData] = React.useState<any>(null);

  const { loading, call } = hooks.useRequest();

  const Mount = React.useCallback(() => {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(null, api.getDashHome(), async (response) => {
      if (response.ok) {
        let newList: any[] = [];

        for (const item of response?.data?.lastestTransactions) {
          await call(null, api.getImage(item?.user?.id), (response) => {
            newList.push({ ...item, img: response?.data });
          });
        }

        setDashData({
          ...response,
          data: { ...response.data, lastestTransactions: newList },
        });
      }
    });
  }, []);
  React.useEffect(() => {
    if (!isMounted) {
      Mount();
      setMount(true);
    }
  }, [Mount, isMounted]);

  const MountPreservedAreas = React.useCallback(() => {
    call( null, api.GetPreservedAreasDashList(), async (response) => {
        if (response.ok) {
          let newList: any[] = [];
          for (const item of response?.data?.content) {
            await call( null, api.GetPreservedAreaDashImage(item.id, item.imageId1),
              (response) => {
                newList.push({ ...item, img: response?.data });
              }
            );
          }
          setPreservedAreasData({ ...response.data, content: newList });
        }
      }
    );
  }, []);
  React.useEffect(() => {
      MountPreservedAreas();
  }, [MountPreservedAreas, isMounted]);

  return (
    <>
      <Styles.Container>
        <Dashboard
          data={dashData}
          PreservedAreasData={PreservedAreasData}
          loading={loading}
        />
      </Styles.Container>
    </>
  );
}

export default Container;

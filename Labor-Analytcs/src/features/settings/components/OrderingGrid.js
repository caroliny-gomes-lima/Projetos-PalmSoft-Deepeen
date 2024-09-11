import React from "react";
import { Texts } from "../../../config";
import { Table } from "../../../components";
import { Switch } from "@material-ui/core";
import { customModal } from "../../modals/utils";

function OrderingGrid({ data, updateUserRequest }) {
  const updateUserAccess = (item, enabled) => {
    const propString = enabled ? "Free" : "Block";
    customModal.setInfos(
      texts[`changeAccessTitle${propString}`],
      [
        texts[`changeAccessText${propString}`] +
          (item.name == null ? "" : item.name) +
          "?",
      ],
      {
        label: texts[`changeAccess${propString}Confirm`],
        onClick: () => {
          callUpdate(item, enabled);
          customModal.close();
        },
      },
      {
        label: texts.changeAccessCancel,
        onClick: customModal.close,
      }
    );
  };

  const callUpdate = (item, enabled) => {
    updateUserRequest({
      id: item.id,
      name: item.name,
      isAdmin: item.isAdmin,
      isPartner: item.isPartner,
      email: item.email,
      enabled: enabled,
      role: item.role.id,
    });
  };

  const texts = Texts["pt-BR"].settings.userSettings.UserList;
  return (
    <Table
      headers={texts.table}
      data={data}
      placeholderSize={6}
      columnSize={6}
      renderItemColumns={(item) => [
        item.name,
        item.email,
        item.roleName,
        <>
          <Switch
            checked={item.enable}
            onChange={() => updateUserAccess(item, !item.enable)}
          />
        </>,
      ]}
    />
  );
}
export default React.memo(OrderingGrid);

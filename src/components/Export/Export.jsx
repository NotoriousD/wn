import React from "react";
import { Button } from "@material-ui/core";

const Export = ({ onExport }) => {
  return (
    <div>
      <Button
        size="medium"
        variant="contained"
        type="submit"
        color="primary"
        onClick={(e) => onExport(e.target.value)}
      >
        Export
      </Button>
    </div>
  );
};

export default Export;

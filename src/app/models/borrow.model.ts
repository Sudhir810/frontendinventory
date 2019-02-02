export class BorrowModel {
  _id: string;

  user: {
    _id: string;
    name: string;
  };

  borrow: [
    {
      _id: string;

      device: {
        _id: string;
        name: string;
      };

      borrowed:Date;
      returned:Date;
    }
  ];
  
}

pragma solidity ^0.6.0;

contract Land {
    address governmentPersona;

    constructor() public {
        governmentPersona = msg.sender;
    }

    struct Landreg {
        uint256 id;
        uint256 area;
        string landAddress;
        uint256 landPrice;
        string logitude;
        string latitude;
        // string allLatitudeLongitude;
        //string allLongitude;
        uint256 propertyPID;
        string physicalSurveyNumber;
        string document;
        bool isforSell;
        address payable ownerAddress;
        bool isLandVerified;
        propType typeOfProperty;
        bool isSellable;
        bool isConfisgated;
        bool onAuction;
    }

    struct User {
        address id;
        string name;
        uint256 age;
        string residenceAddress;
        string aadharNumber;
        string panNumber;
        string document;
        string email;
        string phoneNumber;
        bool isUserVerified;
    }

    struct LandInspector {
        uint256 id;
        address _addr;
        string name;
        uint256 age;
        string designation;
        string city;
    }

    struct LandRequest {
        uint256 reqId;
        address payable sellerId;
        address payable buyerId;
        uint256 landId;
        reqStatus requestStatus;
        bool isPaymentDone;
    }
    enum reqStatus {
        requested,
        accepted,
        rejected,
        paymentdone,
        commpleted
    }

    enum propType {
        House,
        Appartment,
        UrbanLand,
        AgricultureLand,
        RangeLand,
        Forest,
        WaterAreas,
        WetLand,
        BarrenLand,
        Tundra,
        PerennialSNow
    }

    uint256 inspectorsCount;
    uint256 public userCount;
    uint256 public landsCount;
    uint256 public documentId;
    uint256 requestCount;

    mapping(address => LandInspector) public InspectorMapping;
    mapping(uint256 => address[]) allLandInspectorList;
    mapping(address => bool) RegisteredInspectorMapping;
    mapping(address => User) public UserMapping;
    mapping(uint256 => address) AllUsers;
    mapping(uint256 => address[]) allUsersList;
    mapping(address => bool) RegisteredUserMapping;
    mapping(address => uint256[]) MyLands;
    mapping(uint256 => Landreg) public lands;
    mapping(uint256 => LandRequest) public LandRequestMapping;
    mapping(address => uint256[]) MyReceivedLandRequest;
    mapping(address => uint256[]) MySentLandRequest;
    mapping(uint256 => uint256[]) allLandList;
    mapping(uint256 => uint256[]) paymentDoneList;

    function isContractOwner(address _addr) public view returns(bool) {
        if (_addr == governmentPersona) return true;
        else return false;
    }

    function changeContractOwner(address _addr)public{
        require(msg.sender == governmentPersona ,"You are not Owner of this Contract");
        governmentPersona = _addr;
    }

    // Land Inspector ( Tehsildar )

    function  addLandInspector(address _addr,string memory _name,uint  _age,string memory _designation,string memory _city) public returns(bool){
        if(governmentPersona != msg.sender)
        return false;

        require(governmentPersona==msg.sender);
        RegisteredInspectorMapping[_addr]=true;
        allLandInspectorList[1].push(_addr);
        InspectorMapping[_addr] = LandInspector(inspectorsCount,_addr,_name,_age,_designation,_city);
        return true;
    }

    function ReturnAllLandInspectorList() public view returns(address[] memory){
        return  allLandInspectorList[1];
    }

}

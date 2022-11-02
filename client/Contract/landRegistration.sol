// SPDX-License-Identifier: MIT
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

    function isContractOwner(address _addr) public view returns (bool) {
        if (_addr == governmentPersona) return true;
        else return false;
    }

    function changeContractOwner(address _addr) public {
        require(
            msg.sender == governmentPersona,
            "You are not Owner of this Contract"
        );
        governmentPersona = _addr;
    }

    // Land Inspector ( Tehsildar )

    function addLandInspector(
        address _addr,
        string memory _name,
        uint256 _age,
        string memory _designation,
        string memory _city
    ) public returns (bool) {
        if (governmentPersona != msg.sender) return false;

        require(governmentPersona == msg.sender);
        RegisteredInspectorMapping[_addr] = true;
        allLandInspectorList[1].push(_addr);
        InspectorMapping[_addr] = LandInspector(
            inspectorsCount,
            _addr,
            _name,
            _age,
            _designation,
            _city
        );
        return true;
    }

    function ReturnAllLandInspectorList()
        public
        view
        returns (address[] memory)
    {
        return allLandInspectorList[1];
    }

    function removeLandInspector(address _addr) public {
        require(msg.sender == governmentPersona, "You are not contractOwner");
        require(RegisteredInspectorMapping[_addr], "Land Inspector not found");
        RegisteredInspectorMapping[_addr] = false;

        uint256 len = allLandInspectorList[1].length;
        for (uint256 i = 0; i < len; i++) {
            if (allLandInspectorList[1][i] == _addr) {
                allLandInspectorList[1][i] = allLandInspectorList[1][len - 1];
                allLandInspectorList[1].pop();
                break;
            }
        }
    }

    function isLandInspector(address _addr) public view returns (bool) {
        if (RegisteredInspectorMapping[_addr]) {
            return true;
        } else {
            return false;
        }
    }

    function isUserRegistered(address _addr) public view returns (bool) {
        if (RegisteredUserMapping[_addr]) {
            return true;
        } else {
            return false;
        }
    }

    function registerUser(
        string memory _name,
        uint256 _age,
        string memory _city,
        string memory _aadharNumber,
        string memory _panNumber,
        string memory _document,
        string memory _email,
        string memory _phoneNumber
    ) public returns (bool) {
        require(!RegisteredUserMapping[msg.sender], "User Already Registered");
        RegisteredUserMapping[msg.sender] = true;
        userCount++;
        allUsersList[1].push(msg.sender);
        AllUsers[userCount] = msg.sender;
        UserMapping[msg.sender] = User(
            msg.sender,
            _name,
            _age,
            _city,
            _aadharNumber,
            _panNumber,
            _document,
            _email,
            _phoneNumber,
            false
        );
        return true;
    }

    function verifyUser(address _userId) public {
        require(isLandInspector(msg.sender));
        UserMapping[_userId].isUserVerified = true;
    }

    function isUserVerified(address _userId) public view returns (bool) {
        return UserMapping[_userId].isUserVerified;
    }

    function ReturnAllUsersList() public view returns (address[] memory) {
        return allUsersList[1];
    }

    function addLand(
        uint256 _area,
        string memory _landAddress,
        uint256 _landPrice,
        string memory _logitude,
        string memory _latitude,
        uint256 _propertyPID,
        string memory _physicalSurveyNumber,
        string memory _document,
        propType _typeOfProperty
    ) public returns (bool) {
        require(isUserVerified(msg.sender), "User Not Verified");
        landsCount++;
        allLandList[1].push(landsCount);
        MyLands[msg.sender].push(landsCount);
        lands[landsCount] = Landreg(
            landsCount,
            _area,
            _landAddress,
            _landPrice,
            _logitude,
            _latitude,
            _propertyPID,
            _physicalSurveyNumber,
            _document,
            false,
            msg.sender,
            false,
            _typeOfProperty,
            true,
            false,
            false
        );
        return true;
    }

    function ReturnAllLandList() public view returns (uint256[] memory) {
        return allLandList[1];
    }

    function ReturnMyLands() public view returns (uint256[] memory) {
        return MyLands[msg.sender];
    }

    function verifyLand(uint256 _landId) public {
        require(isLandInspector(msg.sender));
        lands[_landId].isLandVerified = true;
    }

    function isLandVerified(uint256 _landId) public view returns (bool) {
        return lands[_landId].isLandVerified;
    }

    function makeItforSell(uint256 _landId) public {
        require(isLandVerified(_landId));
        lands[_landId].isforSell = true;
    }

    function requestForBuy(uint256 _landId) public returns (bool) {
        require(isUserVerified(msg.sender));
        require(lands[_landId].isforSell);
        requestCount++;
        MySentLandRequest[msg.sender].push(requestCount);
        MyReceivedLandRequest[lands[_landId].ownerAddress].push(requestCount);
        LandRequestMapping[requestCount] = LandRequest(
            requestCount,
            lands[_landId].ownerAddress,
            msg.sender,
            _landId,
            reqStatus.requested,
            false
        );

        return true;
    }

    function ReturnMySentLandRequest() public view returns (uint256[] memory) {
        return MySentLandRequest[msg.sender];
    }

    function ReturnMyReceivedLandRequest()
        public
        view
        returns (uint256[] memory)
    {
        return MyReceivedLandRequest[msg.sender];
    }

    function acceptLandRequest(uint256 _requestId) public {
        require(isLandInspector(msg.sender));
        LandRequestMapping[_requestId].requestStatus = reqStatus.rejected;
    }

    function rejectLandRequest(uint256 _requestId) public {
        require(isLandInspector(msg.sender));
        LandRequestMapping[_requestId].requestStatus = reqStatus.rejected;
    }

    function requestStatus(uint256 _requestId) public view returns (bool) {
        return LandRequestMapping[_requestId].isPaymentDone;
    }

    function landPrice(uint256 _landId) public view returns (uint256) {
        return lands[_landId].landPrice;
    }

    function makePayment(uint256 _requestId) public payable {
        require(
            LandRequestMapping[_requestId].buyerId == msg.sender &&
                LandRequestMapping[_requestId].requestStatus ==
                reqStatus.accepted
        );

        LandRequestMapping[_requestId].requestStatus = reqStatus.paymentdone;

        lands[LandRequestMapping[_requestId].landId].ownerAddress.transfer(
            msg.value
        );
        LandRequestMapping[_requestId].isPaymentDone = true;
        paymentDoneList[1].push(_requestId);
    }

    function ReturnPaymentDoneList() public view returns (uint256[] memory) {
        return paymentDoneList[1];
    }

    function transferOwnership(uint256 _requestId, string memory documentUrl)
        public
        returns (bool)
    {
        require(isLandInspector(msg.sender));
        if (LandRequestMapping[_requestId].isPaymentDone == false) return false;
        documentId++;
        LandRequestMapping[_requestId].requestStatus = reqStatus.commpleted;
        MyLands[LandRequestMapping[_requestId].buyerId].push(
            LandRequestMapping[_requestId].landId
        );

        uint256 len = MyLands[LandRequestMapping[_requestId].sellerId].length;
        for (uint256 i = 0; i < len; i++) {
            if (
                MyLands[LandRequestMapping[_requestId].sellerId][i] ==
                LandRequestMapping[_requestId].landId
            ) {
                MyLands[LandRequestMapping[_requestId].sellerId][i] = MyLands[
                    LandRequestMapping[_requestId].sellerId
                ][len - 1];
                //MyLands[LandRequestMapping[_requestId].sellerId].length--;
                MyLands[LandRequestMapping[_requestId].sellerId].pop();
                break;
            }
        }
        lands[LandRequestMapping[_requestId].landId].document = documentUrl;
        lands[LandRequestMapping[_requestId].landId].isforSell = false;
        lands[LandRequestMapping[_requestId].landId]
            .ownerAddress = LandRequestMapping[_requestId].buyerId;
        return true;
    }

    function makePaymentTestFun(address payable _reveiver) public payable {
        _reveiver.transfer(msg.value);
    }
}

import Helpers from "../helpers/helperFunctions";

import {t} from "../helpers/translator";

export const updateTranslations = () => {
    errorCodes = {
        "12": t("Not logged in."),
        "20": t("Balance is less than withdraw amount"),
        "21": t("Captcha mismatching."),
        "26": t("Invalid promo code."),
        "1119": t("Duplicate Email"),
        "WEBSOCKET_DISCONNECTED": t("Your connection was lost please try again later"),
        "ONHOLD": t("Waiting confirmation"),
        "CHANGE_ODD": t("Odd has been changed"),
        "EVENT_LOCKED": t("This event has been locked"),
        "LIMIT_ERROR": t("There is an odd correction"),
        "GAME_STARTED": t("Game started"),
        "1000": t("Internal Error"),
        "1001": t("Null value for argument"),
        "1003": t("Wrong Login/Password"),
        "1004": t("User blocked"),
        "1006": t("Password error"),
        "1008": t("Please verify your account to be able to log in."),
        "1009": t("Such a verification code does not exist."),
        "1010": t("Password can't be same as login."),
        "1012": t("Incorrect phone number."),
        "1013": t("Password is too short."),
        "1014": t("Failed to send sms."),
        "1099": t("Fork exception"),
        "1100": t("Game is already started"),
        "1102": t("Game starttime is already past"),
        "1103": t("Bet editing time is already past"),
        "1104": t("Bet is payed"),
        "1105": t("Bet status not fixed"),
        "1106": t("Bet lose"),
        "1107": t("Bet is online"),
        "1108": t("Wrong value for coefficient"),
        "1109": t("Wrong value for amount"),
        "1112": t("Request is already paid!"),
        "1113": t("Request is already storned!"),
        "1114": t("Card Lot blocked!"),
        "1115": t("Card blocked!"),
        "1116": t("Card activated!"),
        "1117": t("Wrong login or E-mail"),
        "1118": t("Duplicate Login"),
        "1122": t("Duplicate personal id"),
        "1123": t("Duplicate document number"),
        "1127": t("The phone number you have input is already exists."),
        "1134": t("This phone number is already exists."),
        "1135": t("The bank details you have input are already exists."),
        "1150": t("You yet are not allowed to bet on the given event yet"),
        "1200": t("Wrong value exception"),
        "1300": t("Double value exception"),
        "1400": t("Double event exception"),
        "1510": t("Bet amount exceeds Your current limit."),
        "1500": t("Stake exceeds maximum allowable limit"),
        "1550": t("The sum exceeds maximum allowable limit"),
        "1560": t("The sum is less than minimum allowable limit"),
        "1600": t("A correction of coefficients is being performed."),
        "1700": t("Wrong access exception"),
        "1800": t("Odds have been changed"),
        "1900": t("The events can be included only in the multiple type of bet"),
        "1910": t("The events can be included only in the ordinar type of bet"),
        "2000": t("Odds restriction exception"),
        "2100": t("Payment restriction exception"),
        "2200": t("Client limit exception"),
        "2300": t("Office limit exception"),
        "2400": t("Insufficient balance"),
        "2403": t("There are active requests for this client"),
        "1110": t("Deposit limit is set by player (self-limitation)"),
        "2406": t("Player self-excluded themself from being able to place bet"),
        "1026": t("You can make a new superbet only after the existing one is completed."),
        "1510_sb": t("Bet amount exceeds Your current limit. Please use Superbet option."),
        "1002": t("Invalid Username and/or password"),
        "1023": t("Please verify your account to be able to log in."),
        "1028": t("Please enter verification code."),
        "1029": t("Please enter verification code."),
        "2008": t("Self exclusion"),
        "1022": t("You account has been locked. Please try again later."),
        "99": t("We have sent a letter to the specified e-mail address . Click on the link to continue registration. If you do not receive the email, contact support."),
        "2413": t("We have sent a letter to the specified e-mail address . Click on the link to continue registration. If you do not receive the email, contact support."),
        "20099": t("Unknown error"),
        "20001": t("Unsupported service"),
        "20002": t("Currency unsupported"),
        "20003": t("Amount is less than minimum allowed"),
        "20004": t("Amount is greater than maximum allowed"),
        "20005": t("Entered payee information is not correct."),
        "20006": t("Entered payer information is not correct."),
        "20007": t("You already have an active withdrawal request"),
        "20008": t("Withdraw request blocked."),
        //"21": t("User link blocked, please contact support."),
        "22": t("Day limit reached. Please try later."),
        // "2403": t("Withdraw request is already in progress"),
        "1131": t("You have an Active Bonus therefore it's not possible to make a Withdrawal"),
        "1120": t("DuplicateNickName"),
        "1121": t("DuplicateRootNode"),
        "2001": t("ArgumentError"),
        "2002": t("BetshopNotFound"),
        "2003": t("BetStateError"),
        "2004": t("CanNotDeleteNodeWithChildren"),
        "2005": t("CashDeskNotFound"),
        "2006": t("CashDeskNotRegistered"),
        "2007": t("CurrencyMismatch"),
        "2009": t("ClientLocked"),
        "2011": t("DbEntityValidationException"),
        "2012": t("DbUpdateConcurrencyException"),
        "2013": t("DocumentAlreadyInitialized"),
        "2014": t("DocumentInvalidAction"),
        "2015": t("DocumentNotInitialized"),
        "2016": t("DocumentNotFound"),
        "2017": t("DocumentTypeError"),
        "2018": t("EmailShouldNotBeEmpty"),
        "2019": t("ExpiredResetCode"),
        "2020": t("FirstNameShouldNotBeEmpty"),
        "2021": t("GameAlreadyExisits"),
        "2022": t("GameNotExist"),
        "2023": t("IncorrectRequest"),
        "2024": t("InvalidEmail"),
        "2025": t("InvalidFilter"),
        "2026": t("InvalidNodeId"),
        "2027": t("InvalidTreeId"),
        "2028": t("InvalidPaymentSystem"),
        "2029": t("InputValuesMismatch"),
        "2030": t("IsLiveFlagMismatch"),
        "2031": t("LastNameShouldNotBeEmpty"),
        "2032": t("MatchAccessError"),
        "2033": t("MarketSuspended"),
        "2034": t("MatchNotFound"),
        "2035": t("MatchStateNotFound"),
        "2036": t("MatchSuspended"),
        "2037": t("MaxDailyBetAmountError"),
        "2039": t("MinDepositRequestSum"),
        "2040": t("MaxWithdrawalRequestsCount"),
        "2041": t("MaxWithdrawalRequestSum"),
        "2042": t("MarketTypeGroupNotFound"),
        "2043": t("MinWithdrawalRequestSum"),
        "2044": t("NodeWithGivenTypeAndSequenceAlreadyExists"),
        "2045": t("NoRootNodeInSportResultTemplate"),
        "2046": t("NotAllowed"),
        "2047": t("NotAuthorized"),
        "3001": t("NotSupportedCurrency"),
        "2049": t("NickNameAlreadySet"),
        "2050": t("OneMarketTypeGroup"),
        "2051": t("PartnerApiAccNotActivated"),
        "2052": t("PartnerApiClientBalanceError"),
        "2053": t("PartnerApiClientLimitError"),
        "2054": t("PartnerApiEmptyMethod"),
        "2055": t("PartnerApiEmptyRequestBody"),
        "2056": t("PartnerApiMaxAllowableLimit"),
        "2057": t("PartnerApiMinAllowableLimit"),
        "2058": t("PartnerApiPassTokenError"),
        "2059": t("PartnerApiTimeStampExpired"),
        "2060": t("PartnerApiTokenExpired"),
        "2061": t("PartnerApiUserBlocked"),
        "2062": t("PartnerApiWrongHash"),
        "2063": t("PartnerApiWrongLoginEmail"),
        "2064": t("PartnerApiWrongAccess"),
        "2065": t("PartnerNotFound"),
        "2066": t("PartnerCommercialFeeNotFound"),
        "2067": t("PasswordShouldBeDifferent"),
        "2068": t("PermissionNotFound"),
        "2069": t("RegionNotFound"),
        "2070": t("RequestNotAllowed"),
        "2071": t("RequestStateError"),
        "2072": t("ResetCodeExpaired"),
        "2073": t("RoleNotFound"),
        "2074": t("SamePasswordAndLogin"),
        "2075": t("SelectionNotFound"),
        "2076": t("SelectionsCountMismatch"),
        "2077": t("SelectionSuspended"),
        "2078": t("SportMismatch"),
        "2079": t("ShiftDoesNotExists"),
        "2080": t("SportNotSupported"),
        "2081": t("TeamAlreadyExists"),
        "2082": t("TransactionAlreadyExists"),
        "2083": t("TransactionAlreadyOpen"),
        "2084": t("TransactionAmountError"),
        "2085": t("TranslationAlreadyExists"),
        "2086": t("TranslationNotFound"),
        "2088": t("UserPasswordMustBeLonger"),
        "2089": t("UserPasswordRegExpNotValid"),
        "2090": t("OperationAlreadyProcessed"),
        "2091": t("PasswordExpired"),
        "2092": t("UserWasNotFound"),
        "2093": t("UserNameAlreadyExist"),
        "2094": t("MatchStartTimeHasPassed"),
        "2095": t("WithdrawalRequestDocumentNotFound"),
        "2097": t("WrongClassifierGrouopId"),
        "2098": t("WrongCurrencyCode"),
        "2099": t("WrongInputParameters"),
        "2409": t("This type of self exclusion is not allowed"),
        "2420": t("There is already an active Bonus"),
        "2428": t("Account already self excluded"),
        "3000": t("WrongLoginAttempts"),
        "3002": t("WrongOldPassword"),
        "3003": t("WrongTransactionId"),
        "3004": t("InvalidToken"),
        "3005": t("TokenAlreadyExists"),
        "3006": t("InvalidPaymentSystemOperation"),
        "3007": t("InvalidPaymentSystemCommission"),
        "3008": t("ImageUploadFailed"),
        "3009": t("IncorrectClientRequest"),
        "3011": t("IsNotAnImage"),
        "3012": t("CantCreateDirectory"),
        "3013": t("InvalidAgent"),
        "3014": t("InvalidAgentSystem"),
        "3015": t("NegativeAmount"),
        "3016": t("WrongAgentGroup"),
        "3017": t("WrongAgentGroupValue"),
        "3018": t("InvalidAgentGroupItem"),
        "3019": t("BetSelectionsCombindedError"),
        "2404": t("CashOutNotAllowed"),
        "2405": t("BonusNotFound"),
        "2407": t("ClientHasActiveBonus"),
        "2425": t("Client bet stake min limit error")
        // "2406": t("PartnerBonusNotFound"),
    };
    return errorCodes;
};

export var errorCodes = updateTranslations();

export const getErrorMessageByCode =
    (code, displayCodeIfUnknown = true, defaultMessage = null) =>
        (errorCodes[Helpers.isNumeric(code) ? Math.abs(code) : code] || defaultMessage || (displayCodeIfUnknown ? t("Unknown error ({1})", code) : null));
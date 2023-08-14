// flow-typed signature: 2ffe6c98f9a01bfc419510f8a66a77ae
// flow-typed version: npm/faunadb_v2.9.3/flow_v0.111.3

declare module 'faunadb' {
  declare export class Expr {
    constructor(obj: object): Expr;

    _isFaunaExpr?: boolean;
    toFQL(): string;
    static toString(expr: Expr): string
  }

  declare type ExprVal =
    | Ref
    | Expr
    | string
    | number
    | boolean
    | {
        [key: string]: any,
        ...
      };
  declare export type ExprArg = ExprVal | $ReadOnlyArray<ExprVal>;
  declare export type Lambda = (...vars: any[]) => Expr;

  declare export class Value extends Expr {
    toJSON(): object;
    inspect(): string;

    _isFaunaValue?: boolean;
  }

  declare export class Ref extends Value {
    constructor(id: string, col?: Ref, db?: Ref): Ref;

    id: string;
    collection?: Ref;
    /** @deprecated */
    class?: Ref;
    database?: Ref;
    value: {
      collection: {
        value: {
          id: string,
        },
      },
    };

    _isFaunaRef?: boolean;
  }

  declare export type Query = {|
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/ref?lang=javascript */
    Ref: typeof query$Ref,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/bytes?lang=javascript */
    Bytes: typeof query$Bytes,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/abort?lang=javascript */
    Abort: typeof query$Abort,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/At?lang=javascript */
    At: typeof query$At,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/let?lang=javascript */
    Let: typeof query$Let,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/var?lang=javascript */
    Var: typeof query$Var,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/If?lang=javascript */
    If: typeof query$If,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/Do?lang=javascript */
    Do: typeof query$Do,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/object?lang=javascript */
    Object: typeof query$Object,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/lambda?lang=javascript */
    Lambda: typeof query$Lambda,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/call?lang=javascript */
    Call: typeof query$Call,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/query?lang=javascript */
    Query: typeof query$Query,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/map?lang=javascript */
    Map: typeof query$Map,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/merge?lang=javascript */
    Merge: typeof query$Merge,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/foreach?lang=javascript */
    Foreach: typeof query$Foreach,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/filter?lang=javascript */
    Filter: typeof query$Filter,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/take?lang=javascript */
    Take: typeof query$Take,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/drop?lang=javascript */
    Drop: typeof query$Drop,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/prepend?lang=javascript */
    Prepend: typeof query$Prepend,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/append?lang=javascript */
    Append: typeof query$Append,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/isempty?lang=javascript */
    IsEmpty: typeof query$IsEmpty,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/isnonempty?lang=javascript */
    IsNonEmpty: typeof query$IsNonEmpty,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/isnumber?lang=javascript */
    IsNumber: typeof query$IsNumber,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/isdouble?lang=javascript */
    IsDouble: typeof query$IsDouble,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/isinteger?lang=javascript */
    IsInteger: typeof query$IsInteger,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/isboolean?lang=javascript */
    IsBoolean: typeof query$IsBoolean,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/isnull?lang=javascript */
    IsNull: typeof query$IsNull,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/isbytes?lang=javascript */
    IsBytes: typeof query$IsBytes,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/istimestamp?lang=javascript */
    IsTimestamp: typeof query$IsTimestamp,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/isdate?lang=javascript */
    IsDate: typeof query$IsDate,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/isstring?lang=javascript */
    IsString: typeof query$IsString,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/isarray?lang=javascript */
    IsArray: typeof query$IsArray,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/isobject?lang=javascript */
    IsObject: typeof query$IsObject,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/isref?lang=javascript */
    IsRef: typeof query$IsRef,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/isset?lang=javascript */
    IsSet: typeof query$IsSet,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/isdoc?lang=javascript */
    IsDoc: typeof query$IsDoc,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/islambda?lang=javascript */
    IsLambda: typeof query$IsLambda,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/iscollection?lang=javascript */
    IsCollection: typeof query$IsCollection,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/isdatabase?lang=javascript */
    IsDatabase: typeof query$IsDatabase,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/isindex?lang=javascript */
    IsIndex: typeof query$IsIndex,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/isfunction?lang=javascript */
    IsFunction: typeof query$IsFunction,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/iskey?lang=javascript */
    IsKey: typeof query$IsKey,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/istoken?lang=javascript */
    IsToken: typeof query$IsToken,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/iscredentials?lang=javascript */
    IsCredentials: typeof query$IsCredentials,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/isrole?lang=javascript */
    IsRole: typeof query$IsRole,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/get?lang=javascript */
    Get: typeof query$Get,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/keyfromsecret?lang=javascript */
    KeyFromSecret: typeof query$KeyFromSecret,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/reduce?lang=javascript */
    Reduce: typeof query$Reduce,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/paginate?lang=javascript */
    Paginate: typeof query$Paginate,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/exists?lang=javascript */
    Exists: typeof query$Exists,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/create?lang=javascript */
    Create: typeof query$Create,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/update?lang=javascript */
    Update: typeof query$Update,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/replace?lang=javascript */
    Replace: typeof query$Replace,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/delete?lang=javascript */
    Delete: typeof query$Delete,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/insert?lang=javascript */
    Insert: typeof query$Insert,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/remove?lang=javascript */
    Remove: typeof query$Remove,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/createclass?lang=javascript */
    CreateClass: typeof query$CreateClass,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/createcollection?lang=javascript */
    CreateCollection: typeof query$CreateCollection,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/createdatabase?lang=javascript */
    CreateDatabase: typeof query$CreateDatabase,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/createindex?lang=javascript */
    CreateIndex: typeof query$CreateIndex,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/createkey?lang=javascript */
    CreateKey: typeof query$CreateKey,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/createfunction?lang=javascript */
    CreateFunction: typeof query$CreateFunction,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/createrole?lang=javascript */
    CreateRole: typeof query$CreateRole,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/singleton?lang=javascript */
    Singleton: typeof query$Singleton,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/events?lang=javascript */
    Events: typeof query$Events,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/match?lang=javascript */
    Match: typeof query$Match,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/union?lang=javascript */
    Union: typeof query$Union,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/intersection?lang=javascript */
    Intersection: typeof query$Intersection,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/difference?lang=javascript */
    Difference: typeof query$Difference,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/distinct?lang=javascript */
    Distinct: typeof query$Distinct,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/join?lang=javascript */
    Join: typeof query$Join,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/range?lang=javascript */
    Range: typeof query$Range,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/login?lang=javascript */
    Login: typeof query$Login,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/logout?lang=javascript */
    Logout: typeof query$Logout,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/identify?lang=javascript */
    Identify: typeof query$Identify,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/currentidentity?lang=javascript */
    CurrentIdentity: typeof query$Identity,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/hascurrentidentity?lang=javascript */
    HasCurrentIdentity: typeof query$HasIdentity,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/concat?lang=javascript */
    Concat: typeof query$Concat,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/casefold?lang=javascript */
    Casefold: typeof query$Casefold,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/containsstr?lang=javascript */
    ContainsStr: typeof query$ContainsStr,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/containsstrregex?lang=javascript */
    ContainsStrRegex: typeof query$ContainsStrRegex,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/startswith?lang=javascript */
    StartsWith: typeof query$StartsWith,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/endswith?lang=javascript */
    EndsWith: typeof query$EndsWith,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/regexescape?lang=javascript */
    RegexEscape: typeof query$RegexEscape,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/findstr?lang=javascript */
    FindStr: typeof query$FindStr,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/findstrregex?lang=javascript */
    FindStrRegex: typeof query$FindStrRegex,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/length?lang=javascript */
    Length: typeof query$Length,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/lowercase?lang=javascript */
    LowerCase: typeof query$LowerCase,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/ltrim?lang=javascript */
    LTrim: typeof query$LTrim,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/ngram?lang=javascript */
    NGram: typeof query$NGram,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/repeat?lang=javascript */
    Repeat: typeof query$Repeat,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/replacestr?lang=javascript */
    ReplaceStr: typeof query$ReplaceStr,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/replacestrregex?lang=javascript */
    ReplaceStrRegex: typeof query$ReplaceStrRegex,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/rtrim?lang=javascript */
    RTrim: typeof query$RTrim,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/space?lang=javascript */
    Space: typeof query$Space,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/substring?lang=javascript */
    SubString: typeof query$SubString,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/titlecase?lang=javascript */
    TitleCase: typeof query$TitleCase,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/trim?lang=javascript */
    Trim: typeof query$Trim,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/uppercase?lang=javascript */
    UpperCase: typeof query$UpperCase,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/format?lang=javascript */
    Format: typeof query$Format,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/time?lang=javascript */
    Time: typeof query$Time,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/epoch?lang=javascript */
    Epoch: typeof query$Epoch,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/timeadd?lang=javascript */
    TimeAdd: typeof query$TimeAdd,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/timesubtract?lang=javascript */
    TimeSubtract: typeof query$TimeSubtract,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/timediff?lang=javascript */
    TimeDiff: typeof query$TimeDiff,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/date?lang=javascript */
    Date: typeof query$Date,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/now?lang=javascript */
    Now: typeof query$Now,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/dayofweek?lang=javascript */
    DayOfWeek: typeof query$DayOfWeek,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/dayofyear?lang=javascript */
    DayOfYear: typeof query$DayOfYear,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/dayofmonth?lang=javascript */
    DayOfMonth: typeof query$DayOfMonth,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/hour?lang=javascript */
    Hour: typeof query$Hour,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/minute?lang=javascript */
    Minute: typeof query$Minute,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/second?lang=javascript */
    Second: typeof query$Second,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/year?lang=javascript */
    Year: typeof query$Year,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/month?lang=javascript */
    Month: typeof query$Month,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/nextid?lang=javascript */
    NextId: typeof query$NextId,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/newid?lang=javascript */
    NewId: typeof query$NewId,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/database?lang=javascript */
    Database: typeof query$Database,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/index?lang=javascript */
    Index: typeof query$Index,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/class?lang=javascript */
    Class: typeof query$Class,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/collection?lang=javascript */
    Collection: typeof query$Collection,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/function?lang=javascript */
    Function: typeof query$Function,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/role?lang=javascript */
    Role: typeof query$Role,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/databases?lang=javascript */
    Databases: typeof query$Databases,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/classes?lang=javascript */
    Classes: typeof query$Classes,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/collections?lang=javascript */
    Collections: typeof query$Collections,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/indexes?lang=javascript */
    Indexes: typeof query$Indexes,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/functions?lang=javascript */
    Functions: typeof query$Functions,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/roles?lang=javascript */
    Roles: typeof query$Roles,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/keys?lang=javascript */
    Keys: typeof query$Keys,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/tokens?lang=javascript */
    Tokens: typeof query$Tokens,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/credentials?lang=javascript */
    Credentials: typeof query$Credentials,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/equals?lang=javascript */
    Equals: typeof query$Equals,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/contains?lang=javascript */
    Contains: typeof query$Contains,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/select?lang=javascript */
    Select: typeof query$Select,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/selectall?lang=javascript */
    SelectAll: typeof query$SelectAll,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/abs?lang=javascript */
    Abs: typeof query$Abs,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/add?lang=javascript */
    Add: typeof query$Add,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/bitand?lang=javascript */
    BitAnd: typeof query$BitAnd,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/bitnot?lang=javascript */
    BitNot: typeof query$BitNot,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/bitor?lang=javascript */
    BitOr: typeof query$BitOr,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/bitxor?lang=javascript */
    BitXor: typeof query$BitXor,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/ceil?lang=javascript */
    Ceil: typeof query$Ceil,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/divide?lang=javascript */
    Divide: typeof query$Divide,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/floor?lang=javascript */
    Floor: typeof query$Floor,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/max?lang=javascript */
    Max: typeof query$Max,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/min?lang=javascript */
    Min: typeof query$Min,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/modulo?lang=javascript */
    Modulo: typeof query$Modulo,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/multiply?lang=javascript */
    Multiply: typeof query$Multiply,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/round?lang=javascript */
    Round: typeof query$Round,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/subtract?lang=javascript */
    Subtract: typeof query$Subtract,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/sign?lang=javascript */
    Sign: typeof query$Sign,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/sqrt?lang=javascript */
    Sqrt: typeof query$Sqrt,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/trunc?lang=javascript */
    Trunc: typeof query$Trunc,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/count?lang=javascript */
    Count: typeof query$Count,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/sum?lang=javascript */
    Sum: typeof query$Sum,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/mean?lang=javascript */
    Mean: typeof query$Mean,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/any?lang=javascript */
    Any: typeof query$Any,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/all?lang=javascript */
    All: typeof query$All,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/acos?lang=javascript */
    Acos: typeof query$Acos,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/asin?lang=javascript */
    Asin: typeof query$Asin,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/atan?lang=javascript */
    Atan: typeof query$Atan,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/cos?lang=javascript */
    Cos: typeof query$Cos,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/cosh?lang=javascript */
    Cosh: typeof query$Cosh,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/degrees?lang=javascript */
    Degrees: typeof query$Degrees,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/exp?lang=javascript */
    Exp: typeof query$Exp,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/hypot?lang=javascript */
    Hypot: typeof query$Hypot,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/Ln?lang=javascript */
    Ln: typeof query$Ln,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/log?lang=javascript */
    Log: typeof query$Log,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/pow?lang=javascript */
    Pow: typeof query$Pow,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/radians?lang=javascript */
    Radians: typeof query$Radians,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/sin?lang=javascript */
    Sin: typeof query$Sin,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/sinh?lang=javascript */
    Sinh: typeof query$Sinh,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/tan?lang=javascript */
    Tan: typeof query$Tan,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/tanh?lang=javascript */
    Tanh: typeof query$Tanh,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/LT?lang=javascript */
    LT: typeof query$LT,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/lte?lang=javascript */
    LTE: typeof query$LTE,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/GT?lang=javascript */
    GT: typeof query$GT,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/gte?lang=javascript */
    GTE: typeof query$GTE,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/and?lang=javascript */
    And: typeof query$And,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/Or?lang=javascript */
    Or: typeof query$Or,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/not?lang=javascript */
    Not: typeof query$Not,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/tostring?lang=javascript */
    ToString: typeof query$ToString,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/tonumber?lang=javascript */
    ToNumber: typeof query$ToNumber,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/toobject?lang=javascript */
    ToObject: typeof query$ToObject,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/toarray?lang=javascript */
    ToArray: typeof query$ToArray,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/todouble?lang=javascript */
    ToDouble: typeof query$ToDouble,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/tointeger?lang=javascript */
    ToInteger: typeof query$ToInteger,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/totime?lang=javascript */
    ToTime: typeof query$ToTime,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/todate?lang=javascript */
    ToDate: typeof query$ToDate,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/toseconds?lang=javascript */
    ToSeconds: typeof query$ToSeconds,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/tomillis?lang=javascript */
    ToMillis: typeof query$ToMillis,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/tomicros?lang=javascript */
    ToMicros: typeof query$ToMicros,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/movedatabase?lang=javascript */
    MoveDatabase: typeof query$MoveDatabase,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/documents?lang=javascript */
    Documents: typeof query$Documents,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/reverse?lang=javascript */
    Reverse: typeof query$Reverse,
    /** @docs: https://docs.fauna.com/fauna/current/api/fql/functions/containspath?lang=javascript */
    ContainsPath: typeof query$ContainsPath,
  |};

  declare export var query: Query;
  declare export function query$Ref(ref: ExprArg, id?: ExprArg): Ref;

  declare export function query$Bytes(
    bytes: ExprArg | ArrayBuffer | Uint8Array
  ): Expr;

  declare export function query$Abort(msg: ExprArg): Expr;

  declare export function query$At(timestamp: ExprArg, expr: ExprArg): Expr;

  declare export function query$Let(vars: ExprArg, in_expr: ExprArg): Expr;

  declare export function query$Var(varName: ExprArg): Expr;

  declare export function query$If(
    condition: ExprArg | null | void,
    then: ExprArg | null,
    _else: ExprArg | null
  ): Expr;

  declare export function query$Do(...args: Array<?ExprArg>): Expr;

  declare export function query$Object(fields: ExprArg): Expr;

  declare export function query$Lambda(var_name: ExprArg | typeof query$Lambda, expr?: ExprArg): Expr;

  declare export function query$Call(ref: ExprArg, ...args: ExprArg[]): Expr;

  declare export function query$Query(lambda: ExprArg | typeof query$Lambda): Expr;

  declare export function query$Map(
    collection: ExprArg,
    lambda_expr: ExprArg | typeof query$Lambda
  ): Expr;

  declare export function query$Merge(
    object: ExprArg,
    values: ExprArg,
    resolver?: Expr | typeof query$Lambda
  ): Expr;

  declare export function query$Foreach(
    collection: ExprArg,
    lambda_expr: ExprArg | typeof query$Lambda
  ): Expr;

  declare export function query$Filter(
    collection: ExprArg | $ReadOnlyArray<ExprVal | $ReadOnlyArray<ExprVal>>,
    lambda_expr: ExprArg | typeof query$Lambda
  ): Expr;

  declare export function query$Take(number: ExprArg, collection: ExprArg): Expr;

  declare export function query$Drop(number: ExprArg, collection: ExprArg): Expr;

  declare export function query$Prepend(
    elements: ExprArg,
    collection: ExprArg
  ): Expr;

  declare export function query$Append(
    elements: ExprArg,
    collection: ExprArg
  ): Expr;

  declare export function query$IsEmpty(collection: ExprArg): Expr;

  declare export function query$IsNonEmpty(collection: ExprArg): Expr;

  declare export function query$IsNumber(expr: ExprArg): Expr;

  declare export function query$IsDouble(expr: ExprArg): Expr;

  declare export function query$IsInteger(expr: ExprArg): Expr;

  declare export function query$IsBoolean(expr: ExprArg | mixed): Expr;

  declare export function query$IsNull(expr: ExprArg | null): Expr;

  declare export function query$IsBytes(expr: ExprArg): Expr;

  declare export function query$IsTimestamp(expr: ExprArg | null | boolean | number): Expr;

  declare export function query$IsDate(expr: ExprArg): Expr;

  declare export function query$IsString(expr: ExprArg): Expr;

  declare export function query$IsArray(expr: ExprArg): Expr;

  declare export function query$IsObject(expr: ExprArg): Expr;

  declare export function query$IsRef(expr: ExprArg): Expr;

  declare export function query$IsSet(expr: ExprArg): Expr;

  declare export function query$IsDoc(expr: ExprArg): Expr;

  declare export function query$IsLambda(expr: ExprArg): Expr;

  declare export function query$IsCollection(expr: ExprArg): Expr;

  declare export function query$IsDatabase(expr: ExprArg): Expr;

  declare export function query$IsIndex(expr: ExprArg): Expr;

  declare export function query$IsFunction(expr: ExprArg): Expr;

  declare export function query$IsKey(expr: ExprArg): Expr;

  declare export function query$IsToken(expr: ExprArg): Expr;

  declare export function query$IsCredentials(expr: ExprArg): Expr;

  declare export function query$IsRole(expr: ExprArg): Expr;

  declare export function query$Get(ref: ExprArg, ts?: ExprArg): Expr;

  declare export function query$KeyFromSecret(secret: ExprArg): Expr;

  declare export function query$Reduce(
    lambda: ExprArg,
    initial: ExprArg,
    collection: ExprArg
  ): Expr;

  declare export function query$Paginate(
    set: ExprArg,
    opts?: { [key: string]: any }
  ): Expr;

  declare export function query$Exists(ref: ExprArg, ts?: ExprArg): Expr;

  declare export function query$Create(
    collection_ref: ExprArg,
    params?: ExprArg
  ): Expr;

  declare export function query$Update(ref: ExprArg, params: ExprArg): Expr;

  declare export function query$Replace(ref: ExprArg, params: ExprArg): Expr;

  declare export function query$Delete(ref: ExprArg): Expr;

  declare export function query$Insert(
    ref: ExprArg,
    ts: ExprArg,
    action: ExprArg,
    params: ExprArg
  ): Expr;

  declare export function query$Remove(
    ref: ExprArg,
    ts: ExprArg,
    action: ExprArg
  ): Expr;

  declare export function query$CreateClass(params: ExprArg): Expr;

  declare export function query$CreateCollection(params: ExprArg): Expr;

  declare export function query$CreateDatabase(params: ExprArg): Expr;

  declare export function query$CreateIndex(params: ExprArg): Expr;

  declare export function query$CreateKey(params: ExprArg): Expr;

  declare export function query$CreateFunction(params: ExprArg): Expr;

  declare export function query$CreateRole(params: ExprArg): Expr;

  declare export function query$Singleton(ref: ExprArg): Expr;

  declare export function query$Events(ref_set: ExprArg): Expr;

  declare export function query$Match(index: ExprArg, ...terms: (ExprArg | null)[]): Expr;

  declare export function query$Union(...sets: ExprArg[]): Expr;

  declare export function query$Intersection(...sets: ExprArg[]): Expr;

  declare export function query$Difference(...sets: ExprArg[]): Expr;

  declare export function query$Distinct(set: ExprArg): Expr;

  declare export function query$Join(
    source: ExprArg,
    target: ExprArg | typeof query$Lambda
  ): Expr;

  declare export function query$Range(
    set: ExprArg,
    from: ExprArg,
    to: ExprArg
  ): Expr;

  declare export function query$Login(ref: ExprArg, params: ExprArg): Expr;

  declare export function query$Logout(delete_tokens: ExprArg): Expr;

  declare export function query$Identify(ref: ExprArg, password: ExprArg): Expr;

  declare export function query$Identity(): Expr;

  declare export function query$HasIdentity(): Expr;

  declare export function query$Concat(
    strings: ExprArg,
    separator?: ExprArg
  ): Expr;

  declare export function query$Casefold(
    string: ExprArg,
    normalizer?: ExprArg
  ): Expr;

  declare export function query$ContainsStr(
    value: ExprArg,
    search: ExprArg
  ): Expr;

  declare export function query$ContainsStrRegex(
    value: ExprArg,
    pattern: ExprArg
  ): Expr;

  declare export function query$StartsWith(value: ExprArg, search: ExprArg): Expr;

  declare export function query$EndsWith(value: ExprArg, search: ExprArg): Expr;

  declare export function query$RegexEscape(value: ExprArg): Expr;

  declare export function query$FindStr(
    value: ExprArg,
    find: ExprArg,
    start?: ExprArg
  ): Expr;

  declare export function query$FindStrRegex(
    value: ExprArg,
    find: ExprArg,
    start?: ExprArg,
    numResults?: ExprArg
  ): Expr;

  declare export function query$Length(expr: ExprArg): Expr;

  declare export function query$LowerCase(expr: ExprArg): Expr;

  declare export function query$LTrim(expr: ExprArg): Expr;

  declare export function query$NGram(
    terms: ExprArg,
    min?: ExprArg,
    max?: ExprArg
  ): Expr;

  declare export function query$Repeat(expr: ExprArg, number?: ExprArg): Expr;

  declare export function query$ReplaceStr(
    expr: ExprArg,
    find: ExprArg,
    replace: ExprArg
  ): Expr;

  declare export function query$ReplaceStrRegex(
    expr: ExprArg,
    find: ExprArg,
    replace: ExprArg,
    first?: ExprArg
  ): Expr;

  declare export function query$RTrim(expr: ExprArg): Expr;

  declare export function query$Space(expr: ExprArg): Expr;

  declare export function query$SubString(
    expr: ExprArg,
    start?: ExprArg,
    length?: ExprArg
  ): Expr;

  declare export function query$TitleCase(value: ExprArg): Expr;

  declare export function query$Trim(expr: ExprArg): Expr;

  declare export function query$UpperCase(expr: ExprArg): Expr;

  declare export function query$Format(string: ExprArg, values: ExprArg): Expr;

  declare export function query$Time(string: ExprArg): Expr;

  declare export function query$Epoch(number: ExprArg, unit: ExprArg): Expr;

  declare export function query$TimeAdd(
    base: ExprArg,
    offset: ExprArg,
    unit: ExprArg
  ): Expr;

  declare export function query$TimeSubtract(
    base: ExprArg,
    offset: ExprArg,
    unit: ExprArg
  ): Expr;

  declare export function query$TimeDiff(
    start: ExprArg,
    finish: ExprArg,
    unit: ExprArg
  ): Expr;

  declare export function query$Date(string: ExprArg): Expr;

  declare export function query$Now(): Expr;

  declare export function query$DayOfWeek(expr: ExprArg): Expr;

  declare export function query$DayOfYear(expr: ExprArg): Expr;

  declare export function query$DayOfMonth(expr: ExprArg): Expr;

  declare export function query$Hour(expr: ExprArg): Expr;

  declare export function query$Minute(expr: ExprArg): Expr;

  declare export function query$Second(expr: ExprArg): Expr;

  declare export function query$Year(expr: ExprArg): Expr;

  declare export function query$Month(expr: ExprArg): Expr;

  declare export function query$NextId(): Expr;

  declare export function query$NewId(): Expr;

  declare export function query$Database(name: ExprArg, scope?: ExprArg): Expr;

  declare export function query$Index(name: ExprArg, scope?: ExprArg): Expr;

  declare export function query$Class(name: ExprArg, scope?: ExprArg): Expr;

  declare export function query$Collection(name: ExprArg, scope?: ExprArg): Expr;

  declare export function query$Function(name: ExprArg, scope?: ExprArg): Expr;

  declare export function query$Role(name: ExprArg, scope?: ExprArg): Expr;

  declare export function query$Databases(scope?: ExprArg): Expr;

  declare export function query$Classes(scope?: ExprArg): Expr;

  declare export function query$Collections(scope?: ExprArg): Expr;

  declare export function query$Indexes(scope?: ExprArg): Expr;

  declare export function query$Functions(scope?: ExprArg): Expr;

  declare export function query$Roles(scope?: ExprArg): Expr;

  declare export function query$Keys(scope?: ExprArg): Expr;

  declare export function query$Tokens(scope?: ExprArg): Expr;

  declare export function query$Credentials(scope?: ExprArg): Expr;

  declare export function query$Equals(...args: ExprArg[]): Expr;

  declare export function query$Contains(path: ExprArg, _in: ExprArg): Expr;

  declare export function query$Select(
    path: ExprArg,
    from: ExprArg,
    _default?: ExprArg | null
  ): Expr;

  declare export function query$SelectAll(path: ExprArg, from: ExprArg): Expr;

  declare export function query$Abs(expr: ExprArg): Expr;

  declare export function query$Add(...args: ExprArg[]): Expr;

  declare export function query$BitAnd(...args: ExprArg[]): Expr;

  declare export function query$BitNot(expr: ExprArg): Expr;

  declare export function query$BitOr(...args: ExprArg[]): Expr;

  declare export function query$BitXor(...args: ExprArg[]): Expr;

  declare export function query$Ceil(expr: ExprArg): Expr;

  declare export function query$Divide(...args: ExprArg[]): Expr;

  declare export function query$Floor(expr: ExprArg): Expr;

  declare export function query$Max(...args: ExprArg[]): Expr;

  declare export function query$Min(...args: ExprArg[]): Expr;

  declare export function query$Modulo(...args: ExprArg[]): Expr;

  declare export function query$Multiply(...args: ExprArg[]): Expr;

  declare export function query$Round(value: ExprArg, precision?: ExprArg): Expr;

  declare export function query$Subtract(...args: ExprArg[]): Expr;

  declare export function query$Sign(expr: ExprArg): Expr;

  declare export function query$Sqrt(expr: ExprArg): Expr;

  declare export function query$Trunc(value: ExprArg, precision?: ExprArg): Expr;

  declare export function query$Count(expr: ExprArg): Expr;

  declare export function query$Sum(expr: ExprArg): Expr;

  declare export function query$Mean(expr: ExprArg): Expr;

  declare export function query$Any(expr: ExprArg): Expr;

  declare export function query$All(expr: ExprArg): Expr;

  declare export function query$Acos(expr: ExprArg): Expr;

  declare export function query$Asin(expr: ExprArg): Expr;

  declare export function query$Atan(expr: ExprArg): Expr;

  declare export function query$Cos(expr: ExprArg): Expr;

  declare export function query$Cosh(expr: ExprArg): Expr;

  declare export function query$Degrees(expr: ExprArg): Expr;

  declare export function query$Exp(expr: ExprArg): Expr;

  declare export function query$Hypot(value: ExprArg, exp?: ExprArg): Expr;

  declare export function query$Ln(expr: ExprArg): Expr;

  declare export function query$Log(expr: ExprArg): Expr;

  declare export function query$Pow(value: ExprArg, exp?: ExprArg): Expr;

  declare export function query$Radians(expr: ExprArg): Expr;

  declare export function query$Sin(expr: ExprArg): Expr;

  declare export function query$Sinh(expr: ExprArg): Expr;

  declare export function query$Tan(expr: ExprArg): Expr;

  declare export function query$Tanh(expr: ExprArg): Expr;

  declare export function query$LT(...args: ExprArg[]): Expr;

  declare export function query$LTE(...args: ExprArg[]): Expr;

  declare export function query$GT(...args: ExprArg[]): Expr;

  declare export function query$GTE(...args: ExprArg[]): Expr;

  declare export function query$And(...args: ExprArg[]): Expr;

  declare export function query$Or(...args: ExprArg[]): Expr;

  declare export function query$Not(bool: ExprArg): Expr;

  declare export function query$ToString(expr: ExprArg): Expr;

  declare export function query$ToNumber(expr: ExprArg): Expr;

  declare export function query$ToObject(expr: ExprArg): Expr;

  declare export function query$ToArray(expr: ExprArg): Expr;

  declare export function query$ToDouble(expr: ExprArg): Expr;

  declare export function query$ToInteger(expr: ExprArg): Expr;

  declare export function query$ToTime(expr: ExprArg): Expr;

  declare export function query$ToDate(expr: ExprArg): Expr;

  declare export function query$ToSeconds(expr: ExprArg): Expr;

  declare export function query$ToMillis(expr: ExprArg): Expr;

  declare export function query$ToMicros(expr: ExprArg): Expr;

  declare export function query$MoveDatabase(from: ExprArg, to: ExprArg): Expr;

  declare export function query$Documents(collection: ExprArg): Expr;

  declare export function query$Reverse(source: ExprArg | Array<mixed>): Expr;

  declare export function query$ContainsPath(path: ExprArg, lookIn: mixed): Expr;

  declare export class RequestResult {
    constructor(
      method: string,
      path: string,
      query: { [key: string]: any },
      requestRaw: string,
      requestContent: { [key: string]: any },
      responseRaw: string,
      responseContent: { [key: string]: any },
      statusCode: number,
      responseHeaders: { [key: string]: any },
      startTime: Date,
      endTime: Date
    ): this;
    timeTaken: number;
  }

  declare export interface ClientConfig {
    domain?: string;
    scheme?: "http" | "https";
    port?: number;
    secret: string;
    timeout?: number;
    observer?: (res: RequestResult, client: Client) => void;
    keepAlive?: boolean;
  }
  declare export interface QueryOptions {
    secret?: string;
  }

  declare export type MetricsResponse<T> = {
    value: T;
    metrics: {
      'x-compute-ops': number;
      'x-byte-read-ops': number;
      'x-byte-write-ops': number;
      'x-query-time': number;
      'x-txn-retries': number;
    };
  }

  declare export class PageHelper {
    constructor(
      client: Client,
      set: Expr,
      params?: { [key: string]: any },
      options?: QueryOptions
    ): this;
    map(lambda: Lambda): PageHelper;
    filter(lambda: Lambda): PageHelper;
    each(lambda: (page: { [key: string]: any }) => void): Promise<void>;
    eachReverse(lambda: (page: { [key: string]: any }) => void): Promise<void>;
    previousPage(): Promise<{ [key: string]: any }>;
    nextPage(): Promise<{ [key: string]: any }>;
  }

  declare export class Client {
    constructor(opts?: ClientConfig): this;
    query<T>(expr: Expr, options?: QueryOptions): Promise<T>;
    queryWithMetrics<T>(expr: Expr, options?: QueryOptions): Promise<MetricsResponse<T>>;
    paginate(
      expr: Expr,
      params?: { [key: string]: any },
      options?: QueryOptions
    ): PageHelper;
    ping(scope?: string, timeout?: number): Promise<string>;
  }

  declare export default {|
    query: typeof query,
  |}
}

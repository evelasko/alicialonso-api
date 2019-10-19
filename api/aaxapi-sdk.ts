import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
  Json: any,
  Long: any,
};

export type Address = {
   __typename?: 'Address',
  address1: Scalars['String'],
  address2?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  code: Scalars['String'],
  country: Scalars['String'],
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  owner?: Maybe<User>,
  primary: Scalars['Boolean'],
  region: Scalars['String'],
  updatedAt: Scalars['DateTime'],
};

export type AddressConnection = {
   __typename?: 'AddressConnection',
  aggregate: AggregateAddress,
  edges: Array<AddressEdge>,
  pageInfo: PageInfo,
};

export type AddressCreateInput = {
  address1: Scalars['String'],
  address2?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  code: Scalars['String'],
  country: Scalars['String'],
  id?: Maybe<Scalars['ID']>,
  owner?: Maybe<UserCreateOneWithoutAddressesInput>,
  primary?: Maybe<Scalars['Boolean']>,
  region: Scalars['String'],
};

export type AddressCreateManyWithoutOwnerInput = {
  connect?: Maybe<Array<AddressWhereUniqueInput>>,
  create?: Maybe<Array<AddressCreateWithoutOwnerInput>>,
};

export type AddressCreateWithoutOwnerInput = {
  address1: Scalars['String'],
  address2?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  code: Scalars['String'],
  country: Scalars['String'],
  id?: Maybe<Scalars['ID']>,
  primary?: Maybe<Scalars['Boolean']>,
  region: Scalars['String'],
};

export type AddressEdge = {
   __typename?: 'AddressEdge',
  cursor: Scalars['String'],
  node: Address,
};

export enum AddressOrderByInput {
  Address1Asc = 'address1_ASC',
  Address1Desc = 'address1_DESC',
  Address2Asc = 'address2_ASC',
  Address2Desc = 'address2_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  CodeAsc = 'code_ASC',
  CodeDesc = 'code_DESC',
  CountryAsc = 'country_ASC',
  CountryDesc = 'country_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PrimaryAsc = 'primary_ASC',
  PrimaryDesc = 'primary_DESC',
  RegionAsc = 'region_ASC',
  RegionDesc = 'region_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type AddressScalarWhereInput = {
  address1?: Maybe<Scalars['String']>,
  address1_contains?: Maybe<Scalars['String']>,
  address1_ends_with?: Maybe<Scalars['String']>,
  address1_gt?: Maybe<Scalars['String']>,
  address1_gte?: Maybe<Scalars['String']>,
  address1_in?: Maybe<Array<Scalars['String']>>,
  address1_lt?: Maybe<Scalars['String']>,
  address1_lte?: Maybe<Scalars['String']>,
  address1_not?: Maybe<Scalars['String']>,
  address1_not_contains?: Maybe<Scalars['String']>,
  address1_not_ends_with?: Maybe<Scalars['String']>,
  address1_not_in?: Maybe<Array<Scalars['String']>>,
  address1_not_starts_with?: Maybe<Scalars['String']>,
  address1_starts_with?: Maybe<Scalars['String']>,
  address2?: Maybe<Scalars['String']>,
  address2_contains?: Maybe<Scalars['String']>,
  address2_ends_with?: Maybe<Scalars['String']>,
  address2_gt?: Maybe<Scalars['String']>,
  address2_gte?: Maybe<Scalars['String']>,
  address2_in?: Maybe<Array<Scalars['String']>>,
  address2_lt?: Maybe<Scalars['String']>,
  address2_lte?: Maybe<Scalars['String']>,
  address2_not?: Maybe<Scalars['String']>,
  address2_not_contains?: Maybe<Scalars['String']>,
  address2_not_ends_with?: Maybe<Scalars['String']>,
  address2_not_in?: Maybe<Array<Scalars['String']>>,
  address2_not_starts_with?: Maybe<Scalars['String']>,
  address2_starts_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<AddressScalarWhereInput>>,
  city?: Maybe<Scalars['String']>,
  city_contains?: Maybe<Scalars['String']>,
  city_ends_with?: Maybe<Scalars['String']>,
  city_gt?: Maybe<Scalars['String']>,
  city_gte?: Maybe<Scalars['String']>,
  city_in?: Maybe<Array<Scalars['String']>>,
  city_lt?: Maybe<Scalars['String']>,
  city_lte?: Maybe<Scalars['String']>,
  city_not?: Maybe<Scalars['String']>,
  city_not_contains?: Maybe<Scalars['String']>,
  city_not_ends_with?: Maybe<Scalars['String']>,
  city_not_in?: Maybe<Array<Scalars['String']>>,
  city_not_starts_with?: Maybe<Scalars['String']>,
  city_starts_with?: Maybe<Scalars['String']>,
  code?: Maybe<Scalars['String']>,
  code_contains?: Maybe<Scalars['String']>,
  code_ends_with?: Maybe<Scalars['String']>,
  code_gt?: Maybe<Scalars['String']>,
  code_gte?: Maybe<Scalars['String']>,
  code_in?: Maybe<Array<Scalars['String']>>,
  code_lt?: Maybe<Scalars['String']>,
  code_lte?: Maybe<Scalars['String']>,
  code_not?: Maybe<Scalars['String']>,
  code_not_contains?: Maybe<Scalars['String']>,
  code_not_ends_with?: Maybe<Scalars['String']>,
  code_not_in?: Maybe<Array<Scalars['String']>>,
  code_not_starts_with?: Maybe<Scalars['String']>,
  code_starts_with?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  country_contains?: Maybe<Scalars['String']>,
  country_ends_with?: Maybe<Scalars['String']>,
  country_gt?: Maybe<Scalars['String']>,
  country_gte?: Maybe<Scalars['String']>,
  country_in?: Maybe<Array<Scalars['String']>>,
  country_lt?: Maybe<Scalars['String']>,
  country_lte?: Maybe<Scalars['String']>,
  country_not?: Maybe<Scalars['String']>,
  country_not_contains?: Maybe<Scalars['String']>,
  country_not_ends_with?: Maybe<Scalars['String']>,
  country_not_in?: Maybe<Array<Scalars['String']>>,
  country_not_starts_with?: Maybe<Scalars['String']>,
  country_starts_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  NOT?: Maybe<Array<AddressScalarWhereInput>>,
  OR?: Maybe<Array<AddressScalarWhereInput>>,
  primary?: Maybe<Scalars['Boolean']>,
  primary_not?: Maybe<Scalars['Boolean']>,
  region?: Maybe<Scalars['String']>,
  region_contains?: Maybe<Scalars['String']>,
  region_ends_with?: Maybe<Scalars['String']>,
  region_gt?: Maybe<Scalars['String']>,
  region_gte?: Maybe<Scalars['String']>,
  region_in?: Maybe<Array<Scalars['String']>>,
  region_lt?: Maybe<Scalars['String']>,
  region_lte?: Maybe<Scalars['String']>,
  region_not?: Maybe<Scalars['String']>,
  region_not_contains?: Maybe<Scalars['String']>,
  region_not_ends_with?: Maybe<Scalars['String']>,
  region_not_in?: Maybe<Array<Scalars['String']>>,
  region_not_starts_with?: Maybe<Scalars['String']>,
  region_starts_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type AddressUpdateInput = {
  address1?: Maybe<Scalars['String']>,
  address2?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  code?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  owner?: Maybe<UserUpdateOneWithoutAddressesInput>,
  primary?: Maybe<Scalars['Boolean']>,
  region?: Maybe<Scalars['String']>,
};

export type AddressUpdateManyDataInput = {
  address1?: Maybe<Scalars['String']>,
  address2?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  code?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  primary?: Maybe<Scalars['Boolean']>,
  region?: Maybe<Scalars['String']>,
};

export type AddressUpdateManyMutationInput = {
  address1?: Maybe<Scalars['String']>,
  address2?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  code?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  primary?: Maybe<Scalars['Boolean']>,
  region?: Maybe<Scalars['String']>,
};

export type AddressUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<AddressWhereUniqueInput>>,
  create?: Maybe<Array<AddressCreateWithoutOwnerInput>>,
  delete?: Maybe<Array<AddressWhereUniqueInput>>,
  deleteMany?: Maybe<Array<AddressScalarWhereInput>>,
  disconnect?: Maybe<Array<AddressWhereUniqueInput>>,
  set?: Maybe<Array<AddressWhereUniqueInput>>,
  update?: Maybe<Array<AddressUpdateWithWhereUniqueWithoutOwnerInput>>,
  updateMany?: Maybe<Array<AddressUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<AddressUpsertWithWhereUniqueWithoutOwnerInput>>,
};

export type AddressUpdateManyWithWhereNestedInput = {
  data: AddressUpdateManyDataInput,
  where: AddressScalarWhereInput,
};

export type AddressUpdateWithoutOwnerDataInput = {
  address1?: Maybe<Scalars['String']>,
  address2?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  code?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  primary?: Maybe<Scalars['Boolean']>,
  region?: Maybe<Scalars['String']>,
};

export type AddressUpdateWithWhereUniqueWithoutOwnerInput = {
  data: AddressUpdateWithoutOwnerDataInput,
  where: AddressWhereUniqueInput,
};

export type AddressUpsertWithWhereUniqueWithoutOwnerInput = {
  create: AddressCreateWithoutOwnerInput,
  update: AddressUpdateWithoutOwnerDataInput,
  where: AddressWhereUniqueInput,
};

export type AddressWhereInput = {
  address1?: Maybe<Scalars['String']>,
  address1_contains?: Maybe<Scalars['String']>,
  address1_ends_with?: Maybe<Scalars['String']>,
  address1_gt?: Maybe<Scalars['String']>,
  address1_gte?: Maybe<Scalars['String']>,
  address1_in?: Maybe<Array<Scalars['String']>>,
  address1_lt?: Maybe<Scalars['String']>,
  address1_lte?: Maybe<Scalars['String']>,
  address1_not?: Maybe<Scalars['String']>,
  address1_not_contains?: Maybe<Scalars['String']>,
  address1_not_ends_with?: Maybe<Scalars['String']>,
  address1_not_in?: Maybe<Array<Scalars['String']>>,
  address1_not_starts_with?: Maybe<Scalars['String']>,
  address1_starts_with?: Maybe<Scalars['String']>,
  address2?: Maybe<Scalars['String']>,
  address2_contains?: Maybe<Scalars['String']>,
  address2_ends_with?: Maybe<Scalars['String']>,
  address2_gt?: Maybe<Scalars['String']>,
  address2_gte?: Maybe<Scalars['String']>,
  address2_in?: Maybe<Array<Scalars['String']>>,
  address2_lt?: Maybe<Scalars['String']>,
  address2_lte?: Maybe<Scalars['String']>,
  address2_not?: Maybe<Scalars['String']>,
  address2_not_contains?: Maybe<Scalars['String']>,
  address2_not_ends_with?: Maybe<Scalars['String']>,
  address2_not_in?: Maybe<Array<Scalars['String']>>,
  address2_not_starts_with?: Maybe<Scalars['String']>,
  address2_starts_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<AddressWhereInput>>,
  city?: Maybe<Scalars['String']>,
  city_contains?: Maybe<Scalars['String']>,
  city_ends_with?: Maybe<Scalars['String']>,
  city_gt?: Maybe<Scalars['String']>,
  city_gte?: Maybe<Scalars['String']>,
  city_in?: Maybe<Array<Scalars['String']>>,
  city_lt?: Maybe<Scalars['String']>,
  city_lte?: Maybe<Scalars['String']>,
  city_not?: Maybe<Scalars['String']>,
  city_not_contains?: Maybe<Scalars['String']>,
  city_not_ends_with?: Maybe<Scalars['String']>,
  city_not_in?: Maybe<Array<Scalars['String']>>,
  city_not_starts_with?: Maybe<Scalars['String']>,
  city_starts_with?: Maybe<Scalars['String']>,
  code?: Maybe<Scalars['String']>,
  code_contains?: Maybe<Scalars['String']>,
  code_ends_with?: Maybe<Scalars['String']>,
  code_gt?: Maybe<Scalars['String']>,
  code_gte?: Maybe<Scalars['String']>,
  code_in?: Maybe<Array<Scalars['String']>>,
  code_lt?: Maybe<Scalars['String']>,
  code_lte?: Maybe<Scalars['String']>,
  code_not?: Maybe<Scalars['String']>,
  code_not_contains?: Maybe<Scalars['String']>,
  code_not_ends_with?: Maybe<Scalars['String']>,
  code_not_in?: Maybe<Array<Scalars['String']>>,
  code_not_starts_with?: Maybe<Scalars['String']>,
  code_starts_with?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  country_contains?: Maybe<Scalars['String']>,
  country_ends_with?: Maybe<Scalars['String']>,
  country_gt?: Maybe<Scalars['String']>,
  country_gte?: Maybe<Scalars['String']>,
  country_in?: Maybe<Array<Scalars['String']>>,
  country_lt?: Maybe<Scalars['String']>,
  country_lte?: Maybe<Scalars['String']>,
  country_not?: Maybe<Scalars['String']>,
  country_not_contains?: Maybe<Scalars['String']>,
  country_not_ends_with?: Maybe<Scalars['String']>,
  country_not_in?: Maybe<Array<Scalars['String']>>,
  country_not_starts_with?: Maybe<Scalars['String']>,
  country_starts_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  NOT?: Maybe<Array<AddressWhereInput>>,
  OR?: Maybe<Array<AddressWhereInput>>,
  owner?: Maybe<UserWhereInput>,
  primary?: Maybe<Scalars['Boolean']>,
  primary_not?: Maybe<Scalars['Boolean']>,
  region?: Maybe<Scalars['String']>,
  region_contains?: Maybe<Scalars['String']>,
  region_ends_with?: Maybe<Scalars['String']>,
  region_gt?: Maybe<Scalars['String']>,
  region_gte?: Maybe<Scalars['String']>,
  region_in?: Maybe<Array<Scalars['String']>>,
  region_lt?: Maybe<Scalars['String']>,
  region_lte?: Maybe<Scalars['String']>,
  region_not?: Maybe<Scalars['String']>,
  region_not_contains?: Maybe<Scalars['String']>,
  region_not_ends_with?: Maybe<Scalars['String']>,
  region_not_in?: Maybe<Array<Scalars['String']>>,
  region_not_starts_with?: Maybe<Scalars['String']>,
  region_starts_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type AddressWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type AggregateAddress = {
   __typename?: 'AggregateAddress',
  count: Scalars['Int'],
};

export type AggregateAsignatura = {
   __typename?: 'AggregateAsignatura',
  count: Scalars['Int'],
};

export type AggregateAsistencia = {
   __typename?: 'AggregateAsistencia',
  count: Scalars['Int'],
};

export type AggregateConvocatoriaExamen = {
   __typename?: 'AggregateConvocatoriaExamen',
  count: Scalars['Int'],
};

export type AggregateCurso = {
   __typename?: 'AggregateCurso',
  count: Scalars['Int'],
};

export type AggregateDepartment = {
   __typename?: 'AggregateDepartment',
  count: Scalars['Int'],
};

export type AggregateDesdoble = {
   __typename?: 'AggregateDesdoble',
  count: Scalars['Int'],
};

export type AggregateDevice = {
   __typename?: 'AggregateDevice',
  count: Scalars['Int'],
};

export type AggregateDiscount = {
   __typename?: 'AggregateDiscount',
  count: Scalars['Int'],
};

export type AggregateDiscountRequest = {
   __typename?: 'AggregateDiscountRequest',
  count: Scalars['Int'],
};

export type AggregateEstudio = {
   __typename?: 'AggregateEstudio',
  count: Scalars['Int'],
};

export type AggregateEvent = {
   __typename?: 'AggregateEvent',
  count: Scalars['Int'],
};

export type AggregateExamen = {
   __typename?: 'AggregateExamen',
  count: Scalars['Int'],
};

export type AggregateItem = {
   __typename?: 'AggregateItem',
  count: Scalars['Int'],
};

export type AggregateLeccion = {
   __typename?: 'AggregateLeccion',
  count: Scalars['Int'],
};

export type AggregateLeccionEspaciosPlanificados = {
   __typename?: 'AggregateLeccionEspaciosPlanificados',
  count: Scalars['Int'],
};

export type AggregateLeccionSesiones = {
   __typename?: 'AggregateLeccionSesiones',
  count: Scalars['Int'],
};

export type AggregateMatricula = {
   __typename?: 'AggregateMatricula',
  count: Scalars['Int'],
};

export type AggregateMencion = {
   __typename?: 'AggregateMencion',
  count: Scalars['Int'],
};

export type AggregateNews = {
   __typename?: 'AggregateNews',
  count: Scalars['Int'],
};

export type AggregateOfficialDocument = {
   __typename?: 'AggregateOfficialDocument',
  count: Scalars['Int'],
};

export type AggregateOrder = {
   __typename?: 'AggregateOrder',
  count: Scalars['Int'],
};

export type AggregatePeriodoOperativo = {
   __typename?: 'AggregatePeriodoOperativo',
  count: Scalars['Int'],
};

export type AggregateProduct = {
   __typename?: 'AggregateProduct',
  count: Scalars['Int'],
};

export type AggregateProductCategory = {
   __typename?: 'AggregateProductCategory',
  count: Scalars['Int'],
};

export type AggregateProfesoresLecciones = {
   __typename?: 'AggregateProfesoresLecciones',
  count: Scalars['Int'],
};

export type AggregateRatio = {
   __typename?: 'AggregateRatio',
  count: Scalars['Int'],
};

export type AggregateRecurrencia = {
   __typename?: 'AggregateRecurrencia',
  count: Scalars['Int'],
};

export type AggregateRole = {
   __typename?: 'AggregateRole',
  count: Scalars['Int'],
};

export type AggregateSesion = {
   __typename?: 'AggregateSesion',
  count: Scalars['Int'],
};

export type AggregateSocialLink = {
   __typename?: 'AggregateSocialLink',
  count: Scalars['Int'],
};

export type AggregateSocialNetwork = {
   __typename?: 'AggregateSocialNetwork',
  count: Scalars['Int'],
};

export type AggregateSpace = {
   __typename?: 'AggregateSpace',
  count: Scalars['Int'],
};

export type AggregateTitulacion = {
   __typename?: 'AggregateTitulacion',
  count: Scalars['Int'],
};

export type AggregateTransaction = {
   __typename?: 'AggregateTransaction',
  count: Scalars['Int'],
};

export type AggregateUser = {
   __typename?: 'AggregateUser',
  count: Scalars['Int'],
};

export type AggregateUserRoles = {
   __typename?: 'AggregateUserRoles',
  count: Scalars['Int'],
};

export type AggregateVenue = {
   __typename?: 'AggregateVenue',
  count: Scalars['Int'],
};

export enum AppNodeStatus {
  Defered = 'DEFERED',
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type Asignatura = {
   __typename?: 'Asignatura',
  code: Scalars['String'],
  createdAt: Scalars['DateTime'],
  creditosECTS: Scalars['Int'],
  curso: Curso,
  description?: Maybe<Scalars['String']>,
  desdobles?: Maybe<Array<Desdoble>>,
  horasBalance: Scalars['Int'],
  horasSemanasPlanificadas: Scalars['Int'],
  horasSemanasPresenciales: Scalars['Int'],
  horasTotalesPlanificadas: Scalars['Int'],
  horasTotalesPresenciales: Scalars['Int'],
  id: Scalars['ID'],
  name: Scalars['String'],
  ratio: Ratio,
  semsestre: Semestre,
  shortName: Scalars['String'],
  spacerequirements?: Maybe<Scalars['String']>,
  titulacion: Titulacion,
  updatedAt: Scalars['DateTime'],
};


export type AsignaturaDesdoblesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<DesdobleOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<DesdobleWhereInput>
};

export type AsignaturaConnection = {
   __typename?: 'AsignaturaConnection',
  aggregate: AggregateAsignatura,
  edges: Array<AsignaturaEdge>,
  pageInfo: PageInfo,
};

export type AsignaturaCreateInput = {
  code: Scalars['String'],
  creditosECTS?: Maybe<Scalars['Int']>,
  curso: CursoCreateOneWithoutAsignaturasInput,
  description?: Maybe<Scalars['String']>,
  desdobles?: Maybe<DesdobleCreateManyWithoutAsignaturaInput>,
  horasBalance?: Maybe<Scalars['Int']>,
  horasSemanasPlanificadas?: Maybe<Scalars['Int']>,
  horasSemanasPresenciales?: Maybe<Scalars['Int']>,
  horasTotalesPlanificadas?: Maybe<Scalars['Int']>,
  horasTotalesPresenciales?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  ratio: RatioCreateOneWithoutAsignaturasInput,
  semsestre?: Maybe<Semestre>,
  shortName: Scalars['String'],
  spacerequirements?: Maybe<Scalars['String']>,
  titulacion: TitulacionCreateOneWithoutAsignaturasInput,
};

export type AsignaturaCreateManyWithoutCursoInput = {
  connect?: Maybe<Array<AsignaturaWhereUniqueInput>>,
  create?: Maybe<Array<AsignaturaCreateWithoutCursoInput>>,
};

export type AsignaturaCreateManyWithoutRatioInput = {
  connect?: Maybe<Array<AsignaturaWhereUniqueInput>>,
  create?: Maybe<Array<AsignaturaCreateWithoutRatioInput>>,
};

export type AsignaturaCreateManyWithoutTitulacionInput = {
  connect?: Maybe<Array<AsignaturaWhereUniqueInput>>,
  create?: Maybe<Array<AsignaturaCreateWithoutTitulacionInput>>,
};

export type AsignaturaCreateOneWithoutDesdoblesInput = {
  connect?: Maybe<AsignaturaWhereUniqueInput>,
  create?: Maybe<AsignaturaCreateWithoutDesdoblesInput>,
};

export type AsignaturaCreateWithoutCursoInput = {
  code: Scalars['String'],
  creditosECTS?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  desdobles?: Maybe<DesdobleCreateManyWithoutAsignaturaInput>,
  horasBalance?: Maybe<Scalars['Int']>,
  horasSemanasPlanificadas?: Maybe<Scalars['Int']>,
  horasSemanasPresenciales?: Maybe<Scalars['Int']>,
  horasTotalesPlanificadas?: Maybe<Scalars['Int']>,
  horasTotalesPresenciales?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  ratio: RatioCreateOneWithoutAsignaturasInput,
  semsestre?: Maybe<Semestre>,
  shortName: Scalars['String'],
  spacerequirements?: Maybe<Scalars['String']>,
  titulacion: TitulacionCreateOneWithoutAsignaturasInput,
};

export type AsignaturaCreateWithoutDesdoblesInput = {
  code: Scalars['String'],
  creditosECTS?: Maybe<Scalars['Int']>,
  curso: CursoCreateOneWithoutAsignaturasInput,
  description?: Maybe<Scalars['String']>,
  horasBalance?: Maybe<Scalars['Int']>,
  horasSemanasPlanificadas?: Maybe<Scalars['Int']>,
  horasSemanasPresenciales?: Maybe<Scalars['Int']>,
  horasTotalesPlanificadas?: Maybe<Scalars['Int']>,
  horasTotalesPresenciales?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  ratio: RatioCreateOneWithoutAsignaturasInput,
  semsestre?: Maybe<Semestre>,
  shortName: Scalars['String'],
  spacerequirements?: Maybe<Scalars['String']>,
  titulacion: TitulacionCreateOneWithoutAsignaturasInput,
};

export type AsignaturaCreateWithoutRatioInput = {
  code: Scalars['String'],
  creditosECTS?: Maybe<Scalars['Int']>,
  curso: CursoCreateOneWithoutAsignaturasInput,
  description?: Maybe<Scalars['String']>,
  desdobles?: Maybe<DesdobleCreateManyWithoutAsignaturaInput>,
  horasBalance?: Maybe<Scalars['Int']>,
  horasSemanasPlanificadas?: Maybe<Scalars['Int']>,
  horasSemanasPresenciales?: Maybe<Scalars['Int']>,
  horasTotalesPlanificadas?: Maybe<Scalars['Int']>,
  horasTotalesPresenciales?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  semsestre?: Maybe<Semestre>,
  shortName: Scalars['String'],
  spacerequirements?: Maybe<Scalars['String']>,
  titulacion: TitulacionCreateOneWithoutAsignaturasInput,
};

export type AsignaturaCreateWithoutTitulacionInput = {
  code: Scalars['String'],
  creditosECTS?: Maybe<Scalars['Int']>,
  curso: CursoCreateOneWithoutAsignaturasInput,
  description?: Maybe<Scalars['String']>,
  desdobles?: Maybe<DesdobleCreateManyWithoutAsignaturaInput>,
  horasBalance?: Maybe<Scalars['Int']>,
  horasSemanasPlanificadas?: Maybe<Scalars['Int']>,
  horasSemanasPresenciales?: Maybe<Scalars['Int']>,
  horasTotalesPlanificadas?: Maybe<Scalars['Int']>,
  horasTotalesPresenciales?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  ratio: RatioCreateOneWithoutAsignaturasInput,
  semsestre?: Maybe<Semestre>,
  shortName: Scalars['String'],
  spacerequirements?: Maybe<Scalars['String']>,
};

export type AsignaturaEdge = {
   __typename?: 'AsignaturaEdge',
  cursor: Scalars['String'],
  node: Asignatura,
};

export enum AsignaturaOrderByInput {
  CodeAsc = 'code_ASC',
  CodeDesc = 'code_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreditosEctsAsc = 'creditosECTS_ASC',
  CreditosEctsDesc = 'creditosECTS_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  HorasBalanceAsc = 'horasBalance_ASC',
  HorasBalanceDesc = 'horasBalance_DESC',
  HorasSemanasPlanificadasAsc = 'horasSemanasPlanificadas_ASC',
  HorasSemanasPlanificadasDesc = 'horasSemanasPlanificadas_DESC',
  HorasSemanasPresencialesAsc = 'horasSemanasPresenciales_ASC',
  HorasSemanasPresencialesDesc = 'horasSemanasPresenciales_DESC',
  HorasTotalesPlanificadasAsc = 'horasTotalesPlanificadas_ASC',
  HorasTotalesPlanificadasDesc = 'horasTotalesPlanificadas_DESC',
  HorasTotalesPresencialesAsc = 'horasTotalesPresenciales_ASC',
  HorasTotalesPresencialesDesc = 'horasTotalesPresenciales_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SemsestreAsc = 'semsestre_ASC',
  SemsestreDesc = 'semsestre_DESC',
  ShortNameAsc = 'shortName_ASC',
  ShortNameDesc = 'shortName_DESC',
  SpacerequirementsAsc = 'spacerequirements_ASC',
  SpacerequirementsDesc = 'spacerequirements_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type AsignaturaScalarWhereInput = {
  AND?: Maybe<Array<AsignaturaScalarWhereInput>>,
  code?: Maybe<Scalars['String']>,
  code_contains?: Maybe<Scalars['String']>,
  code_ends_with?: Maybe<Scalars['String']>,
  code_gt?: Maybe<Scalars['String']>,
  code_gte?: Maybe<Scalars['String']>,
  code_in?: Maybe<Array<Scalars['String']>>,
  code_lt?: Maybe<Scalars['String']>,
  code_lte?: Maybe<Scalars['String']>,
  code_not?: Maybe<Scalars['String']>,
  code_not_contains?: Maybe<Scalars['String']>,
  code_not_ends_with?: Maybe<Scalars['String']>,
  code_not_in?: Maybe<Array<Scalars['String']>>,
  code_not_starts_with?: Maybe<Scalars['String']>,
  code_starts_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  creditosECTS?: Maybe<Scalars['Int']>,
  creditosECTS_gt?: Maybe<Scalars['Int']>,
  creditosECTS_gte?: Maybe<Scalars['Int']>,
  creditosECTS_in?: Maybe<Array<Scalars['Int']>>,
  creditosECTS_lt?: Maybe<Scalars['Int']>,
  creditosECTS_lte?: Maybe<Scalars['Int']>,
  creditosECTS_not?: Maybe<Scalars['Int']>,
  creditosECTS_not_in?: Maybe<Array<Scalars['Int']>>,
  description?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  horasBalance?: Maybe<Scalars['Int']>,
  horasBalance_gt?: Maybe<Scalars['Int']>,
  horasBalance_gte?: Maybe<Scalars['Int']>,
  horasBalance_in?: Maybe<Array<Scalars['Int']>>,
  horasBalance_lt?: Maybe<Scalars['Int']>,
  horasBalance_lte?: Maybe<Scalars['Int']>,
  horasBalance_not?: Maybe<Scalars['Int']>,
  horasBalance_not_in?: Maybe<Array<Scalars['Int']>>,
  horasSemanasPlanificadas?: Maybe<Scalars['Int']>,
  horasSemanasPlanificadas_gt?: Maybe<Scalars['Int']>,
  horasSemanasPlanificadas_gte?: Maybe<Scalars['Int']>,
  horasSemanasPlanificadas_in?: Maybe<Array<Scalars['Int']>>,
  horasSemanasPlanificadas_lt?: Maybe<Scalars['Int']>,
  horasSemanasPlanificadas_lte?: Maybe<Scalars['Int']>,
  horasSemanasPlanificadas_not?: Maybe<Scalars['Int']>,
  horasSemanasPlanificadas_not_in?: Maybe<Array<Scalars['Int']>>,
  horasSemanasPresenciales?: Maybe<Scalars['Int']>,
  horasSemanasPresenciales_gt?: Maybe<Scalars['Int']>,
  horasSemanasPresenciales_gte?: Maybe<Scalars['Int']>,
  horasSemanasPresenciales_in?: Maybe<Array<Scalars['Int']>>,
  horasSemanasPresenciales_lt?: Maybe<Scalars['Int']>,
  horasSemanasPresenciales_lte?: Maybe<Scalars['Int']>,
  horasSemanasPresenciales_not?: Maybe<Scalars['Int']>,
  horasSemanasPresenciales_not_in?: Maybe<Array<Scalars['Int']>>,
  horasTotalesPlanificadas?: Maybe<Scalars['Int']>,
  horasTotalesPlanificadas_gt?: Maybe<Scalars['Int']>,
  horasTotalesPlanificadas_gte?: Maybe<Scalars['Int']>,
  horasTotalesPlanificadas_in?: Maybe<Array<Scalars['Int']>>,
  horasTotalesPlanificadas_lt?: Maybe<Scalars['Int']>,
  horasTotalesPlanificadas_lte?: Maybe<Scalars['Int']>,
  horasTotalesPlanificadas_not?: Maybe<Scalars['Int']>,
  horasTotalesPlanificadas_not_in?: Maybe<Array<Scalars['Int']>>,
  horasTotalesPresenciales?: Maybe<Scalars['Int']>,
  horasTotalesPresenciales_gt?: Maybe<Scalars['Int']>,
  horasTotalesPresenciales_gte?: Maybe<Scalars['Int']>,
  horasTotalesPresenciales_in?: Maybe<Array<Scalars['Int']>>,
  horasTotalesPresenciales_lt?: Maybe<Scalars['Int']>,
  horasTotalesPresenciales_lte?: Maybe<Scalars['Int']>,
  horasTotalesPresenciales_not?: Maybe<Scalars['Int']>,
  horasTotalesPresenciales_not_in?: Maybe<Array<Scalars['Int']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<AsignaturaScalarWhereInput>>,
  OR?: Maybe<Array<AsignaturaScalarWhereInput>>,
  semsestre?: Maybe<Semestre>,
  semsestre_in?: Maybe<Array<Semestre>>,
  semsestre_not?: Maybe<Semestre>,
  semsestre_not_in?: Maybe<Array<Semestre>>,
  shortName?: Maybe<Scalars['String']>,
  shortName_contains?: Maybe<Scalars['String']>,
  shortName_ends_with?: Maybe<Scalars['String']>,
  shortName_gt?: Maybe<Scalars['String']>,
  shortName_gte?: Maybe<Scalars['String']>,
  shortName_in?: Maybe<Array<Scalars['String']>>,
  shortName_lt?: Maybe<Scalars['String']>,
  shortName_lte?: Maybe<Scalars['String']>,
  shortName_not?: Maybe<Scalars['String']>,
  shortName_not_contains?: Maybe<Scalars['String']>,
  shortName_not_ends_with?: Maybe<Scalars['String']>,
  shortName_not_in?: Maybe<Array<Scalars['String']>>,
  shortName_not_starts_with?: Maybe<Scalars['String']>,
  shortName_starts_with?: Maybe<Scalars['String']>,
  spacerequirements?: Maybe<Scalars['String']>,
  spacerequirements_contains?: Maybe<Scalars['String']>,
  spacerequirements_ends_with?: Maybe<Scalars['String']>,
  spacerequirements_gt?: Maybe<Scalars['String']>,
  spacerequirements_gte?: Maybe<Scalars['String']>,
  spacerequirements_in?: Maybe<Array<Scalars['String']>>,
  spacerequirements_lt?: Maybe<Scalars['String']>,
  spacerequirements_lte?: Maybe<Scalars['String']>,
  spacerequirements_not?: Maybe<Scalars['String']>,
  spacerequirements_not_contains?: Maybe<Scalars['String']>,
  spacerequirements_not_ends_with?: Maybe<Scalars['String']>,
  spacerequirements_not_in?: Maybe<Array<Scalars['String']>>,
  spacerequirements_not_starts_with?: Maybe<Scalars['String']>,
  spacerequirements_starts_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type AsignaturaUpdateInput = {
  code?: Maybe<Scalars['String']>,
  creditosECTS?: Maybe<Scalars['Int']>,
  curso?: Maybe<CursoUpdateOneRequiredWithoutAsignaturasInput>,
  description?: Maybe<Scalars['String']>,
  desdobles?: Maybe<DesdobleUpdateManyWithoutAsignaturaInput>,
  horasBalance?: Maybe<Scalars['Int']>,
  horasSemanasPlanificadas?: Maybe<Scalars['Int']>,
  horasSemanasPresenciales?: Maybe<Scalars['Int']>,
  horasTotalesPlanificadas?: Maybe<Scalars['Int']>,
  horasTotalesPresenciales?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  ratio?: Maybe<RatioUpdateOneRequiredWithoutAsignaturasInput>,
  semsestre?: Maybe<Semestre>,
  shortName?: Maybe<Scalars['String']>,
  spacerequirements?: Maybe<Scalars['String']>,
  titulacion?: Maybe<TitulacionUpdateOneRequiredWithoutAsignaturasInput>,
};

export type AsignaturaUpdateManyDataInput = {
  code?: Maybe<Scalars['String']>,
  creditosECTS?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  horasBalance?: Maybe<Scalars['Int']>,
  horasSemanasPlanificadas?: Maybe<Scalars['Int']>,
  horasSemanasPresenciales?: Maybe<Scalars['Int']>,
  horasTotalesPlanificadas?: Maybe<Scalars['Int']>,
  horasTotalesPresenciales?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  semsestre?: Maybe<Semestre>,
  shortName?: Maybe<Scalars['String']>,
  spacerequirements?: Maybe<Scalars['String']>,
};

export type AsignaturaUpdateManyMutationInput = {
  code?: Maybe<Scalars['String']>,
  creditosECTS?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  horasBalance?: Maybe<Scalars['Int']>,
  horasSemanasPlanificadas?: Maybe<Scalars['Int']>,
  horasSemanasPresenciales?: Maybe<Scalars['Int']>,
  horasTotalesPlanificadas?: Maybe<Scalars['Int']>,
  horasTotalesPresenciales?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  semsestre?: Maybe<Semestre>,
  shortName?: Maybe<Scalars['String']>,
  spacerequirements?: Maybe<Scalars['String']>,
};

export type AsignaturaUpdateManyWithoutCursoInput = {
  connect?: Maybe<Array<AsignaturaWhereUniqueInput>>,
  create?: Maybe<Array<AsignaturaCreateWithoutCursoInput>>,
  delete?: Maybe<Array<AsignaturaWhereUniqueInput>>,
  deleteMany?: Maybe<Array<AsignaturaScalarWhereInput>>,
  disconnect?: Maybe<Array<AsignaturaWhereUniqueInput>>,
  set?: Maybe<Array<AsignaturaWhereUniqueInput>>,
  update?: Maybe<Array<AsignaturaUpdateWithWhereUniqueWithoutCursoInput>>,
  updateMany?: Maybe<Array<AsignaturaUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<AsignaturaUpsertWithWhereUniqueWithoutCursoInput>>,
};

export type AsignaturaUpdateManyWithoutRatioInput = {
  connect?: Maybe<Array<AsignaturaWhereUniqueInput>>,
  create?: Maybe<Array<AsignaturaCreateWithoutRatioInput>>,
  delete?: Maybe<Array<AsignaturaWhereUniqueInput>>,
  deleteMany?: Maybe<Array<AsignaturaScalarWhereInput>>,
  disconnect?: Maybe<Array<AsignaturaWhereUniqueInput>>,
  set?: Maybe<Array<AsignaturaWhereUniqueInput>>,
  update?: Maybe<Array<AsignaturaUpdateWithWhereUniqueWithoutRatioInput>>,
  updateMany?: Maybe<Array<AsignaturaUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<AsignaturaUpsertWithWhereUniqueWithoutRatioInput>>,
};

export type AsignaturaUpdateManyWithoutTitulacionInput = {
  connect?: Maybe<Array<AsignaturaWhereUniqueInput>>,
  create?: Maybe<Array<AsignaturaCreateWithoutTitulacionInput>>,
  delete?: Maybe<Array<AsignaturaWhereUniqueInput>>,
  deleteMany?: Maybe<Array<AsignaturaScalarWhereInput>>,
  disconnect?: Maybe<Array<AsignaturaWhereUniqueInput>>,
  set?: Maybe<Array<AsignaturaWhereUniqueInput>>,
  update?: Maybe<Array<AsignaturaUpdateWithWhereUniqueWithoutTitulacionInput>>,
  updateMany?: Maybe<Array<AsignaturaUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<AsignaturaUpsertWithWhereUniqueWithoutTitulacionInput>>,
};

export type AsignaturaUpdateManyWithWhereNestedInput = {
  data: AsignaturaUpdateManyDataInput,
  where: AsignaturaScalarWhereInput,
};

export type AsignaturaUpdateOneRequiredWithoutDesdoblesInput = {
  connect?: Maybe<AsignaturaWhereUniqueInput>,
  create?: Maybe<AsignaturaCreateWithoutDesdoblesInput>,
  update?: Maybe<AsignaturaUpdateWithoutDesdoblesDataInput>,
  upsert?: Maybe<AsignaturaUpsertWithoutDesdoblesInput>,
};

export type AsignaturaUpdateWithoutCursoDataInput = {
  code?: Maybe<Scalars['String']>,
  creditosECTS?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  desdobles?: Maybe<DesdobleUpdateManyWithoutAsignaturaInput>,
  horasBalance?: Maybe<Scalars['Int']>,
  horasSemanasPlanificadas?: Maybe<Scalars['Int']>,
  horasSemanasPresenciales?: Maybe<Scalars['Int']>,
  horasTotalesPlanificadas?: Maybe<Scalars['Int']>,
  horasTotalesPresenciales?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  ratio?: Maybe<RatioUpdateOneRequiredWithoutAsignaturasInput>,
  semsestre?: Maybe<Semestre>,
  shortName?: Maybe<Scalars['String']>,
  spacerequirements?: Maybe<Scalars['String']>,
  titulacion?: Maybe<TitulacionUpdateOneRequiredWithoutAsignaturasInput>,
};

export type AsignaturaUpdateWithoutDesdoblesDataInput = {
  code?: Maybe<Scalars['String']>,
  creditosECTS?: Maybe<Scalars['Int']>,
  curso?: Maybe<CursoUpdateOneRequiredWithoutAsignaturasInput>,
  description?: Maybe<Scalars['String']>,
  horasBalance?: Maybe<Scalars['Int']>,
  horasSemanasPlanificadas?: Maybe<Scalars['Int']>,
  horasSemanasPresenciales?: Maybe<Scalars['Int']>,
  horasTotalesPlanificadas?: Maybe<Scalars['Int']>,
  horasTotalesPresenciales?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  ratio?: Maybe<RatioUpdateOneRequiredWithoutAsignaturasInput>,
  semsestre?: Maybe<Semestre>,
  shortName?: Maybe<Scalars['String']>,
  spacerequirements?: Maybe<Scalars['String']>,
  titulacion?: Maybe<TitulacionUpdateOneRequiredWithoutAsignaturasInput>,
};

export type AsignaturaUpdateWithoutRatioDataInput = {
  code?: Maybe<Scalars['String']>,
  creditosECTS?: Maybe<Scalars['Int']>,
  curso?: Maybe<CursoUpdateOneRequiredWithoutAsignaturasInput>,
  description?: Maybe<Scalars['String']>,
  desdobles?: Maybe<DesdobleUpdateManyWithoutAsignaturaInput>,
  horasBalance?: Maybe<Scalars['Int']>,
  horasSemanasPlanificadas?: Maybe<Scalars['Int']>,
  horasSemanasPresenciales?: Maybe<Scalars['Int']>,
  horasTotalesPlanificadas?: Maybe<Scalars['Int']>,
  horasTotalesPresenciales?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  semsestre?: Maybe<Semestre>,
  shortName?: Maybe<Scalars['String']>,
  spacerequirements?: Maybe<Scalars['String']>,
  titulacion?: Maybe<TitulacionUpdateOneRequiredWithoutAsignaturasInput>,
};

export type AsignaturaUpdateWithoutTitulacionDataInput = {
  code?: Maybe<Scalars['String']>,
  creditosECTS?: Maybe<Scalars['Int']>,
  curso?: Maybe<CursoUpdateOneRequiredWithoutAsignaturasInput>,
  description?: Maybe<Scalars['String']>,
  desdobles?: Maybe<DesdobleUpdateManyWithoutAsignaturaInput>,
  horasBalance?: Maybe<Scalars['Int']>,
  horasSemanasPlanificadas?: Maybe<Scalars['Int']>,
  horasSemanasPresenciales?: Maybe<Scalars['Int']>,
  horasTotalesPlanificadas?: Maybe<Scalars['Int']>,
  horasTotalesPresenciales?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  ratio?: Maybe<RatioUpdateOneRequiredWithoutAsignaturasInput>,
  semsestre?: Maybe<Semestre>,
  shortName?: Maybe<Scalars['String']>,
  spacerequirements?: Maybe<Scalars['String']>,
};

export type AsignaturaUpdateWithWhereUniqueWithoutCursoInput = {
  data: AsignaturaUpdateWithoutCursoDataInput,
  where: AsignaturaWhereUniqueInput,
};

export type AsignaturaUpdateWithWhereUniqueWithoutRatioInput = {
  data: AsignaturaUpdateWithoutRatioDataInput,
  where: AsignaturaWhereUniqueInput,
};

export type AsignaturaUpdateWithWhereUniqueWithoutTitulacionInput = {
  data: AsignaturaUpdateWithoutTitulacionDataInput,
  where: AsignaturaWhereUniqueInput,
};

export type AsignaturaUpsertWithoutDesdoblesInput = {
  create: AsignaturaCreateWithoutDesdoblesInput,
  update: AsignaturaUpdateWithoutDesdoblesDataInput,
};

export type AsignaturaUpsertWithWhereUniqueWithoutCursoInput = {
  create: AsignaturaCreateWithoutCursoInput,
  update: AsignaturaUpdateWithoutCursoDataInput,
  where: AsignaturaWhereUniqueInput,
};

export type AsignaturaUpsertWithWhereUniqueWithoutRatioInput = {
  create: AsignaturaCreateWithoutRatioInput,
  update: AsignaturaUpdateWithoutRatioDataInput,
  where: AsignaturaWhereUniqueInput,
};

export type AsignaturaUpsertWithWhereUniqueWithoutTitulacionInput = {
  create: AsignaturaCreateWithoutTitulacionInput,
  update: AsignaturaUpdateWithoutTitulacionDataInput,
  where: AsignaturaWhereUniqueInput,
};

export type AsignaturaWhereInput = {
  AND?: Maybe<Array<AsignaturaWhereInput>>,
  code?: Maybe<Scalars['String']>,
  code_contains?: Maybe<Scalars['String']>,
  code_ends_with?: Maybe<Scalars['String']>,
  code_gt?: Maybe<Scalars['String']>,
  code_gte?: Maybe<Scalars['String']>,
  code_in?: Maybe<Array<Scalars['String']>>,
  code_lt?: Maybe<Scalars['String']>,
  code_lte?: Maybe<Scalars['String']>,
  code_not?: Maybe<Scalars['String']>,
  code_not_contains?: Maybe<Scalars['String']>,
  code_not_ends_with?: Maybe<Scalars['String']>,
  code_not_in?: Maybe<Array<Scalars['String']>>,
  code_not_starts_with?: Maybe<Scalars['String']>,
  code_starts_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  creditosECTS?: Maybe<Scalars['Int']>,
  creditosECTS_gt?: Maybe<Scalars['Int']>,
  creditosECTS_gte?: Maybe<Scalars['Int']>,
  creditosECTS_in?: Maybe<Array<Scalars['Int']>>,
  creditosECTS_lt?: Maybe<Scalars['Int']>,
  creditosECTS_lte?: Maybe<Scalars['Int']>,
  creditosECTS_not?: Maybe<Scalars['Int']>,
  creditosECTS_not_in?: Maybe<Array<Scalars['Int']>>,
  curso?: Maybe<CursoWhereInput>,
  description?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  desdobles_every?: Maybe<DesdobleWhereInput>,
  desdobles_none?: Maybe<DesdobleWhereInput>,
  desdobles_some?: Maybe<DesdobleWhereInput>,
  horasBalance?: Maybe<Scalars['Int']>,
  horasBalance_gt?: Maybe<Scalars['Int']>,
  horasBalance_gte?: Maybe<Scalars['Int']>,
  horasBalance_in?: Maybe<Array<Scalars['Int']>>,
  horasBalance_lt?: Maybe<Scalars['Int']>,
  horasBalance_lte?: Maybe<Scalars['Int']>,
  horasBalance_not?: Maybe<Scalars['Int']>,
  horasBalance_not_in?: Maybe<Array<Scalars['Int']>>,
  horasSemanasPlanificadas?: Maybe<Scalars['Int']>,
  horasSemanasPlanificadas_gt?: Maybe<Scalars['Int']>,
  horasSemanasPlanificadas_gte?: Maybe<Scalars['Int']>,
  horasSemanasPlanificadas_in?: Maybe<Array<Scalars['Int']>>,
  horasSemanasPlanificadas_lt?: Maybe<Scalars['Int']>,
  horasSemanasPlanificadas_lte?: Maybe<Scalars['Int']>,
  horasSemanasPlanificadas_not?: Maybe<Scalars['Int']>,
  horasSemanasPlanificadas_not_in?: Maybe<Array<Scalars['Int']>>,
  horasSemanasPresenciales?: Maybe<Scalars['Int']>,
  horasSemanasPresenciales_gt?: Maybe<Scalars['Int']>,
  horasSemanasPresenciales_gte?: Maybe<Scalars['Int']>,
  horasSemanasPresenciales_in?: Maybe<Array<Scalars['Int']>>,
  horasSemanasPresenciales_lt?: Maybe<Scalars['Int']>,
  horasSemanasPresenciales_lte?: Maybe<Scalars['Int']>,
  horasSemanasPresenciales_not?: Maybe<Scalars['Int']>,
  horasSemanasPresenciales_not_in?: Maybe<Array<Scalars['Int']>>,
  horasTotalesPlanificadas?: Maybe<Scalars['Int']>,
  horasTotalesPlanificadas_gt?: Maybe<Scalars['Int']>,
  horasTotalesPlanificadas_gte?: Maybe<Scalars['Int']>,
  horasTotalesPlanificadas_in?: Maybe<Array<Scalars['Int']>>,
  horasTotalesPlanificadas_lt?: Maybe<Scalars['Int']>,
  horasTotalesPlanificadas_lte?: Maybe<Scalars['Int']>,
  horasTotalesPlanificadas_not?: Maybe<Scalars['Int']>,
  horasTotalesPlanificadas_not_in?: Maybe<Array<Scalars['Int']>>,
  horasTotalesPresenciales?: Maybe<Scalars['Int']>,
  horasTotalesPresenciales_gt?: Maybe<Scalars['Int']>,
  horasTotalesPresenciales_gte?: Maybe<Scalars['Int']>,
  horasTotalesPresenciales_in?: Maybe<Array<Scalars['Int']>>,
  horasTotalesPresenciales_lt?: Maybe<Scalars['Int']>,
  horasTotalesPresenciales_lte?: Maybe<Scalars['Int']>,
  horasTotalesPresenciales_not?: Maybe<Scalars['Int']>,
  horasTotalesPresenciales_not_in?: Maybe<Array<Scalars['Int']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<AsignaturaWhereInput>>,
  OR?: Maybe<Array<AsignaturaWhereInput>>,
  ratio?: Maybe<RatioWhereInput>,
  semsestre?: Maybe<Semestre>,
  semsestre_in?: Maybe<Array<Semestre>>,
  semsestre_not?: Maybe<Semestre>,
  semsestre_not_in?: Maybe<Array<Semestre>>,
  shortName?: Maybe<Scalars['String']>,
  shortName_contains?: Maybe<Scalars['String']>,
  shortName_ends_with?: Maybe<Scalars['String']>,
  shortName_gt?: Maybe<Scalars['String']>,
  shortName_gte?: Maybe<Scalars['String']>,
  shortName_in?: Maybe<Array<Scalars['String']>>,
  shortName_lt?: Maybe<Scalars['String']>,
  shortName_lte?: Maybe<Scalars['String']>,
  shortName_not?: Maybe<Scalars['String']>,
  shortName_not_contains?: Maybe<Scalars['String']>,
  shortName_not_ends_with?: Maybe<Scalars['String']>,
  shortName_not_in?: Maybe<Array<Scalars['String']>>,
  shortName_not_starts_with?: Maybe<Scalars['String']>,
  shortName_starts_with?: Maybe<Scalars['String']>,
  spacerequirements?: Maybe<Scalars['String']>,
  spacerequirements_contains?: Maybe<Scalars['String']>,
  spacerequirements_ends_with?: Maybe<Scalars['String']>,
  spacerequirements_gt?: Maybe<Scalars['String']>,
  spacerequirements_gte?: Maybe<Scalars['String']>,
  spacerequirements_in?: Maybe<Array<Scalars['String']>>,
  spacerequirements_lt?: Maybe<Scalars['String']>,
  spacerequirements_lte?: Maybe<Scalars['String']>,
  spacerequirements_not?: Maybe<Scalars['String']>,
  spacerequirements_not_contains?: Maybe<Scalars['String']>,
  spacerequirements_not_ends_with?: Maybe<Scalars['String']>,
  spacerequirements_not_in?: Maybe<Array<Scalars['String']>>,
  spacerequirements_not_starts_with?: Maybe<Scalars['String']>,
  spacerequirements_starts_with?: Maybe<Scalars['String']>,
  titulacion?: Maybe<TitulacionWhereInput>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type AsignaturaWhereUniqueInput = {
  code?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
};

export type Asistencia = {
   __typename?: 'Asistencia',
  atendida: Scalars['Boolean'],
  dispensada: Scalars['Boolean'],
  estudiante: User,
  id: Scalars['ID'],
  justificada: Scalars['Boolean'],
  sesion: Sesion,
};

export type AsistenciaConnection = {
   __typename?: 'AsistenciaConnection',
  aggregate: AggregateAsistencia,
  edges: Array<AsistenciaEdge>,
  pageInfo: PageInfo,
};

export type AsistenciaCreateInput = {
  atendida?: Maybe<Scalars['Boolean']>,
  dispensada?: Maybe<Scalars['Boolean']>,
  estudiante: UserCreateOneWithoutAsistenciasInput,
  id?: Maybe<Scalars['ID']>,
  justificada?: Maybe<Scalars['Boolean']>,
  sesion: SesionCreateOneWithoutAsistenciaInput,
};

export type AsistenciaCreateManyWithoutEstudianteInput = {
  connect?: Maybe<Array<AsistenciaWhereUniqueInput>>,
  create?: Maybe<Array<AsistenciaCreateWithoutEstudianteInput>>,
};

export type AsistenciaCreateManyWithoutSesionInput = {
  connect?: Maybe<Array<AsistenciaWhereUniqueInput>>,
  create?: Maybe<Array<AsistenciaCreateWithoutSesionInput>>,
};

export type AsistenciaCreateWithoutEstudianteInput = {
  atendida?: Maybe<Scalars['Boolean']>,
  dispensada?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['ID']>,
  justificada?: Maybe<Scalars['Boolean']>,
  sesion: SesionCreateOneWithoutAsistenciaInput,
};

export type AsistenciaCreateWithoutSesionInput = {
  atendida?: Maybe<Scalars['Boolean']>,
  dispensada?: Maybe<Scalars['Boolean']>,
  estudiante: UserCreateOneWithoutAsistenciasInput,
  id?: Maybe<Scalars['ID']>,
  justificada?: Maybe<Scalars['Boolean']>,
};

export type AsistenciaEdge = {
   __typename?: 'AsistenciaEdge',
  cursor: Scalars['String'],
  node: Asistencia,
};

export enum AsistenciaOrderByInput {
  AtendidaAsc = 'atendida_ASC',
  AtendidaDesc = 'atendida_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DispensadaAsc = 'dispensada_ASC',
  DispensadaDesc = 'dispensada_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  JustificadaAsc = 'justificada_ASC',
  JustificadaDesc = 'justificada_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type AsistenciaScalarWhereInput = {
  AND?: Maybe<Array<AsistenciaScalarWhereInput>>,
  atendida?: Maybe<Scalars['Boolean']>,
  atendida_not?: Maybe<Scalars['Boolean']>,
  dispensada?: Maybe<Scalars['Boolean']>,
  dispensada_not?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  justificada?: Maybe<Scalars['Boolean']>,
  justificada_not?: Maybe<Scalars['Boolean']>,
  NOT?: Maybe<Array<AsistenciaScalarWhereInput>>,
  OR?: Maybe<Array<AsistenciaScalarWhereInput>>,
};

export type AsistenciaUpdateInput = {
  atendida?: Maybe<Scalars['Boolean']>,
  dispensada?: Maybe<Scalars['Boolean']>,
  estudiante?: Maybe<UserUpdateOneRequiredWithoutAsistenciasInput>,
  justificada?: Maybe<Scalars['Boolean']>,
  sesion?: Maybe<SesionUpdateOneRequiredWithoutAsistenciaInput>,
};

export type AsistenciaUpdateManyDataInput = {
  atendida?: Maybe<Scalars['Boolean']>,
  dispensada?: Maybe<Scalars['Boolean']>,
  justificada?: Maybe<Scalars['Boolean']>,
};

export type AsistenciaUpdateManyMutationInput = {
  atendida?: Maybe<Scalars['Boolean']>,
  dispensada?: Maybe<Scalars['Boolean']>,
  justificada?: Maybe<Scalars['Boolean']>,
};

export type AsistenciaUpdateManyWithoutEstudianteInput = {
  connect?: Maybe<Array<AsistenciaWhereUniqueInput>>,
  create?: Maybe<Array<AsistenciaCreateWithoutEstudianteInput>>,
  delete?: Maybe<Array<AsistenciaWhereUniqueInput>>,
  deleteMany?: Maybe<Array<AsistenciaScalarWhereInput>>,
  disconnect?: Maybe<Array<AsistenciaWhereUniqueInput>>,
  set?: Maybe<Array<AsistenciaWhereUniqueInput>>,
  update?: Maybe<Array<AsistenciaUpdateWithWhereUniqueWithoutEstudianteInput>>,
  updateMany?: Maybe<Array<AsistenciaUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<AsistenciaUpsertWithWhereUniqueWithoutEstudianteInput>>,
};

export type AsistenciaUpdateManyWithoutSesionInput = {
  connect?: Maybe<Array<AsistenciaWhereUniqueInput>>,
  create?: Maybe<Array<AsistenciaCreateWithoutSesionInput>>,
  delete?: Maybe<Array<AsistenciaWhereUniqueInput>>,
  deleteMany?: Maybe<Array<AsistenciaScalarWhereInput>>,
  disconnect?: Maybe<Array<AsistenciaWhereUniqueInput>>,
  set?: Maybe<Array<AsistenciaWhereUniqueInput>>,
  update?: Maybe<Array<AsistenciaUpdateWithWhereUniqueWithoutSesionInput>>,
  updateMany?: Maybe<Array<AsistenciaUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<AsistenciaUpsertWithWhereUniqueWithoutSesionInput>>,
};

export type AsistenciaUpdateManyWithWhereNestedInput = {
  data: AsistenciaUpdateManyDataInput,
  where: AsistenciaScalarWhereInput,
};

export type AsistenciaUpdateWithoutEstudianteDataInput = {
  atendida?: Maybe<Scalars['Boolean']>,
  dispensada?: Maybe<Scalars['Boolean']>,
  justificada?: Maybe<Scalars['Boolean']>,
  sesion?: Maybe<SesionUpdateOneRequiredWithoutAsistenciaInput>,
};

export type AsistenciaUpdateWithoutSesionDataInput = {
  atendida?: Maybe<Scalars['Boolean']>,
  dispensada?: Maybe<Scalars['Boolean']>,
  estudiante?: Maybe<UserUpdateOneRequiredWithoutAsistenciasInput>,
  justificada?: Maybe<Scalars['Boolean']>,
};

export type AsistenciaUpdateWithWhereUniqueWithoutEstudianteInput = {
  data: AsistenciaUpdateWithoutEstudianteDataInput,
  where: AsistenciaWhereUniqueInput,
};

export type AsistenciaUpdateWithWhereUniqueWithoutSesionInput = {
  data: AsistenciaUpdateWithoutSesionDataInput,
  where: AsistenciaWhereUniqueInput,
};

export type AsistenciaUpsertWithWhereUniqueWithoutEstudianteInput = {
  create: AsistenciaCreateWithoutEstudianteInput,
  update: AsistenciaUpdateWithoutEstudianteDataInput,
  where: AsistenciaWhereUniqueInput,
};

export type AsistenciaUpsertWithWhereUniqueWithoutSesionInput = {
  create: AsistenciaCreateWithoutSesionInput,
  update: AsistenciaUpdateWithoutSesionDataInput,
  where: AsistenciaWhereUniqueInput,
};

export type AsistenciaWhereInput = {
  AND?: Maybe<Array<AsistenciaWhereInput>>,
  atendida?: Maybe<Scalars['Boolean']>,
  atendida_not?: Maybe<Scalars['Boolean']>,
  dispensada?: Maybe<Scalars['Boolean']>,
  dispensada_not?: Maybe<Scalars['Boolean']>,
  estudiante?: Maybe<UserWhereInput>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  justificada?: Maybe<Scalars['Boolean']>,
  justificada_not?: Maybe<Scalars['Boolean']>,
  NOT?: Maybe<Array<AsistenciaWhereInput>>,
  OR?: Maybe<Array<AsistenciaWhereInput>>,
  sesion?: Maybe<SesionWhereInput>,
};

export type AsistenciaWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

/** Authorization payload data */
export type AuthPayload = {
   __typename?: 'AuthPayload',
  token: Scalars['String'],
};

export type BatchPayload = {
   __typename?: 'BatchPayload',
  count: Scalars['Long'],
};

export type ConvocatoriaExamen = {
   __typename?: 'ConvocatoriaExamen',
  createdAt: Scalars['DateTime'],
  dateEnd: Scalars['DateTime'],
  dateStart: Scalars['DateTime'],
  examenes?: Maybe<Array<Examen>>,
  id: Scalars['ID'],
  name: Scalars['String'],
  periodo: PeriodoOperativo,
  updatedAt: Scalars['DateTime'],
};


export type ConvocatoriaExamenExamenesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ExamenOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ExamenWhereInput>
};

export type ConvocatoriaExamenConnection = {
   __typename?: 'ConvocatoriaExamenConnection',
  aggregate: AggregateConvocatoriaExamen,
  edges: Array<ConvocatoriaExamenEdge>,
  pageInfo: PageInfo,
};

export type ConvocatoriaExamenCreateInput = {
  dateEnd: Scalars['DateTime'],
  dateStart: Scalars['DateTime'],
  examenes?: Maybe<ExamenCreateManyWithoutConvocatoriaInput>,
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  periodo: PeriodoOperativoCreateOneWithoutConvocatoriasExamenesInput,
};

export type ConvocatoriaExamenCreateManyWithoutPeriodoInput = {
  connect?: Maybe<Array<ConvocatoriaExamenWhereUniqueInput>>,
  create?: Maybe<Array<ConvocatoriaExamenCreateWithoutPeriodoInput>>,
};

export type ConvocatoriaExamenCreateOneWithoutExamenesInput = {
  connect?: Maybe<ConvocatoriaExamenWhereUniqueInput>,
  create?: Maybe<ConvocatoriaExamenCreateWithoutExamenesInput>,
};

export type ConvocatoriaExamenCreateWithoutExamenesInput = {
  dateEnd: Scalars['DateTime'],
  dateStart: Scalars['DateTime'],
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  periodo: PeriodoOperativoCreateOneWithoutConvocatoriasExamenesInput,
};

export type ConvocatoriaExamenCreateWithoutPeriodoInput = {
  dateEnd: Scalars['DateTime'],
  dateStart: Scalars['DateTime'],
  examenes?: Maybe<ExamenCreateManyWithoutConvocatoriaInput>,
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
};

export type ConvocatoriaExamenEdge = {
   __typename?: 'ConvocatoriaExamenEdge',
  cursor: Scalars['String'],
  node: ConvocatoriaExamen,
};

export enum ConvocatoriaExamenOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateEndAsc = 'dateEnd_ASC',
  DateEndDesc = 'dateEnd_DESC',
  DateStartAsc = 'dateStart_ASC',
  DateStartDesc = 'dateStart_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ConvocatoriaExamenScalarWhereInput = {
  AND?: Maybe<Array<ConvocatoriaExamenScalarWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  dateEnd?: Maybe<Scalars['DateTime']>,
  dateEnd_gt?: Maybe<Scalars['DateTime']>,
  dateEnd_gte?: Maybe<Scalars['DateTime']>,
  dateEnd_in?: Maybe<Array<Scalars['DateTime']>>,
  dateEnd_lt?: Maybe<Scalars['DateTime']>,
  dateEnd_lte?: Maybe<Scalars['DateTime']>,
  dateEnd_not?: Maybe<Scalars['DateTime']>,
  dateEnd_not_in?: Maybe<Array<Scalars['DateTime']>>,
  dateStart?: Maybe<Scalars['DateTime']>,
  dateStart_gt?: Maybe<Scalars['DateTime']>,
  dateStart_gte?: Maybe<Scalars['DateTime']>,
  dateStart_in?: Maybe<Array<Scalars['DateTime']>>,
  dateStart_lt?: Maybe<Scalars['DateTime']>,
  dateStart_lte?: Maybe<Scalars['DateTime']>,
  dateStart_not?: Maybe<Scalars['DateTime']>,
  dateStart_not_in?: Maybe<Array<Scalars['DateTime']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<ConvocatoriaExamenScalarWhereInput>>,
  OR?: Maybe<Array<ConvocatoriaExamenScalarWhereInput>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type ConvocatoriaExamenUpdateInput = {
  dateEnd?: Maybe<Scalars['DateTime']>,
  dateStart?: Maybe<Scalars['DateTime']>,
  examenes?: Maybe<ExamenUpdateManyWithoutConvocatoriaInput>,
  name?: Maybe<Scalars['String']>,
  periodo?: Maybe<PeriodoOperativoUpdateOneRequiredWithoutConvocatoriasExamenesInput>,
};

export type ConvocatoriaExamenUpdateManyDataInput = {
  dateEnd?: Maybe<Scalars['DateTime']>,
  dateStart?: Maybe<Scalars['DateTime']>,
  name?: Maybe<Scalars['String']>,
};

export type ConvocatoriaExamenUpdateManyMutationInput = {
  dateEnd?: Maybe<Scalars['DateTime']>,
  dateStart?: Maybe<Scalars['DateTime']>,
  name?: Maybe<Scalars['String']>,
};

export type ConvocatoriaExamenUpdateManyWithoutPeriodoInput = {
  connect?: Maybe<Array<ConvocatoriaExamenWhereUniqueInput>>,
  create?: Maybe<Array<ConvocatoriaExamenCreateWithoutPeriodoInput>>,
  delete?: Maybe<Array<ConvocatoriaExamenWhereUniqueInput>>,
  deleteMany?: Maybe<Array<ConvocatoriaExamenScalarWhereInput>>,
  disconnect?: Maybe<Array<ConvocatoriaExamenWhereUniqueInput>>,
  set?: Maybe<Array<ConvocatoriaExamenWhereUniqueInput>>,
  update?: Maybe<Array<ConvocatoriaExamenUpdateWithWhereUniqueWithoutPeriodoInput>>,
  updateMany?: Maybe<Array<ConvocatoriaExamenUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<ConvocatoriaExamenUpsertWithWhereUniqueWithoutPeriodoInput>>,
};

export type ConvocatoriaExamenUpdateManyWithWhereNestedInput = {
  data: ConvocatoriaExamenUpdateManyDataInput,
  where: ConvocatoriaExamenScalarWhereInput,
};

export type ConvocatoriaExamenUpdateOneRequiredWithoutExamenesInput = {
  connect?: Maybe<ConvocatoriaExamenWhereUniqueInput>,
  create?: Maybe<ConvocatoriaExamenCreateWithoutExamenesInput>,
  update?: Maybe<ConvocatoriaExamenUpdateWithoutExamenesDataInput>,
  upsert?: Maybe<ConvocatoriaExamenUpsertWithoutExamenesInput>,
};

export type ConvocatoriaExamenUpdateWithoutExamenesDataInput = {
  dateEnd?: Maybe<Scalars['DateTime']>,
  dateStart?: Maybe<Scalars['DateTime']>,
  name?: Maybe<Scalars['String']>,
  periodo?: Maybe<PeriodoOperativoUpdateOneRequiredWithoutConvocatoriasExamenesInput>,
};

export type ConvocatoriaExamenUpdateWithoutPeriodoDataInput = {
  dateEnd?: Maybe<Scalars['DateTime']>,
  dateStart?: Maybe<Scalars['DateTime']>,
  examenes?: Maybe<ExamenUpdateManyWithoutConvocatoriaInput>,
  name?: Maybe<Scalars['String']>,
};

export type ConvocatoriaExamenUpdateWithWhereUniqueWithoutPeriodoInput = {
  data: ConvocatoriaExamenUpdateWithoutPeriodoDataInput,
  where: ConvocatoriaExamenWhereUniqueInput,
};

export type ConvocatoriaExamenUpsertWithoutExamenesInput = {
  create: ConvocatoriaExamenCreateWithoutExamenesInput,
  update: ConvocatoriaExamenUpdateWithoutExamenesDataInput,
};

export type ConvocatoriaExamenUpsertWithWhereUniqueWithoutPeriodoInput = {
  create: ConvocatoriaExamenCreateWithoutPeriodoInput,
  update: ConvocatoriaExamenUpdateWithoutPeriodoDataInput,
  where: ConvocatoriaExamenWhereUniqueInput,
};

export type ConvocatoriaExamenWhereInput = {
  AND?: Maybe<Array<ConvocatoriaExamenWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  dateEnd?: Maybe<Scalars['DateTime']>,
  dateEnd_gt?: Maybe<Scalars['DateTime']>,
  dateEnd_gte?: Maybe<Scalars['DateTime']>,
  dateEnd_in?: Maybe<Array<Scalars['DateTime']>>,
  dateEnd_lt?: Maybe<Scalars['DateTime']>,
  dateEnd_lte?: Maybe<Scalars['DateTime']>,
  dateEnd_not?: Maybe<Scalars['DateTime']>,
  dateEnd_not_in?: Maybe<Array<Scalars['DateTime']>>,
  dateStart?: Maybe<Scalars['DateTime']>,
  dateStart_gt?: Maybe<Scalars['DateTime']>,
  dateStart_gte?: Maybe<Scalars['DateTime']>,
  dateStart_in?: Maybe<Array<Scalars['DateTime']>>,
  dateStart_lt?: Maybe<Scalars['DateTime']>,
  dateStart_lte?: Maybe<Scalars['DateTime']>,
  dateStart_not?: Maybe<Scalars['DateTime']>,
  dateStart_not_in?: Maybe<Array<Scalars['DateTime']>>,
  examenes_every?: Maybe<ExamenWhereInput>,
  examenes_none?: Maybe<ExamenWhereInput>,
  examenes_some?: Maybe<ExamenWhereInput>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<ConvocatoriaExamenWhereInput>>,
  OR?: Maybe<Array<ConvocatoriaExamenWhereInput>>,
  periodo?: Maybe<PeriodoOperativoWhereInput>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type ConvocatoriaExamenWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Curso = {
   __typename?: 'Curso',
  asignaturas?: Maybe<Array<Asignatura>>,
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  identifier: Scalars['String'],
  updatedAt: Scalars['DateTime'],
};


export type CursoAsignaturasArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<AsignaturaOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<AsignaturaWhereInput>
};

export type CursoConnection = {
   __typename?: 'CursoConnection',
  aggregate: AggregateCurso,
  edges: Array<CursoEdge>,
  pageInfo: PageInfo,
};

export type CursoCreateInput = {
  asignaturas?: Maybe<AsignaturaCreateManyWithoutCursoInput>,
  id?: Maybe<Scalars['ID']>,
  identifier: Scalars['String'],
};

export type CursoCreateOneWithoutAsignaturasInput = {
  connect?: Maybe<CursoWhereUniqueInput>,
  create?: Maybe<CursoCreateWithoutAsignaturasInput>,
};

export type CursoCreateWithoutAsignaturasInput = {
  id?: Maybe<Scalars['ID']>,
  identifier: Scalars['String'],
};

export type CursoEdge = {
   __typename?: 'CursoEdge',
  cursor: Scalars['String'],
  node: Curso,
};

export enum CursoOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IdentifierAsc = 'identifier_ASC',
  IdentifierDesc = 'identifier_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CursoUpdateInput = {
  asignaturas?: Maybe<AsignaturaUpdateManyWithoutCursoInput>,
  identifier?: Maybe<Scalars['String']>,
};

export type CursoUpdateManyMutationInput = {
  identifier?: Maybe<Scalars['String']>,
};

export type CursoUpdateOneRequiredWithoutAsignaturasInput = {
  connect?: Maybe<CursoWhereUniqueInput>,
  create?: Maybe<CursoCreateWithoutAsignaturasInput>,
  update?: Maybe<CursoUpdateWithoutAsignaturasDataInput>,
  upsert?: Maybe<CursoUpsertWithoutAsignaturasInput>,
};

export type CursoUpdateWithoutAsignaturasDataInput = {
  identifier?: Maybe<Scalars['String']>,
};

export type CursoUpsertWithoutAsignaturasInput = {
  create: CursoCreateWithoutAsignaturasInput,
  update: CursoUpdateWithoutAsignaturasDataInput,
};

export type CursoWhereInput = {
  AND?: Maybe<Array<CursoWhereInput>>,
  asignaturas_every?: Maybe<AsignaturaWhereInput>,
  asignaturas_none?: Maybe<AsignaturaWhereInput>,
  asignaturas_some?: Maybe<AsignaturaWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  identifier?: Maybe<Scalars['String']>,
  identifier_contains?: Maybe<Scalars['String']>,
  identifier_ends_with?: Maybe<Scalars['String']>,
  identifier_gt?: Maybe<Scalars['String']>,
  identifier_gte?: Maybe<Scalars['String']>,
  identifier_in?: Maybe<Array<Scalars['String']>>,
  identifier_lt?: Maybe<Scalars['String']>,
  identifier_lte?: Maybe<Scalars['String']>,
  identifier_not?: Maybe<Scalars['String']>,
  identifier_not_contains?: Maybe<Scalars['String']>,
  identifier_not_ends_with?: Maybe<Scalars['String']>,
  identifier_not_in?: Maybe<Array<Scalars['String']>>,
  identifier_not_starts_with?: Maybe<Scalars['String']>,
  identifier_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<CursoWhereInput>>,
  OR?: Maybe<Array<CursoWhereInput>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type CursoWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  identifier?: Maybe<Scalars['String']>,
};


export type Department = {
   __typename?: 'Department',
  id: Scalars['ID'],
  members?: Maybe<Array<User>>,
  name: Scalars['String'],
};


export type DepartmentMembersArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<UserWhereInput>
};

export type DepartmentConnection = {
   __typename?: 'DepartmentConnection',
  aggregate: AggregateDepartment,
  edges: Array<DepartmentEdge>,
  pageInfo: PageInfo,
};

export type DepartmentCreateInput = {
  id?: Maybe<Scalars['ID']>,
  members?: Maybe<UserCreateManyWithoutDepartmentInput>,
  name: Scalars['String'],
};

export type DepartmentCreateOneWithoutMembersInput = {
  connect?: Maybe<DepartmentWhereUniqueInput>,
  create?: Maybe<DepartmentCreateWithoutMembersInput>,
};

export type DepartmentCreateWithoutMembersInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
};

export type DepartmentEdge = {
   __typename?: 'DepartmentEdge',
  cursor: Scalars['String'],
  node: Department,
};

export enum DepartmentOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type DepartmentUpdateInput = {
  members?: Maybe<UserUpdateManyWithoutDepartmentInput>,
  name?: Maybe<Scalars['String']>,
};

export type DepartmentUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
};

export type DepartmentUpdateOneWithoutMembersInput = {
  connect?: Maybe<DepartmentWhereUniqueInput>,
  create?: Maybe<DepartmentCreateWithoutMembersInput>,
  delete?: Maybe<Scalars['Boolean']>,
  disconnect?: Maybe<Scalars['Boolean']>,
  update?: Maybe<DepartmentUpdateWithoutMembersDataInput>,
  upsert?: Maybe<DepartmentUpsertWithoutMembersInput>,
};

export type DepartmentUpdateWithoutMembersDataInput = {
  name?: Maybe<Scalars['String']>,
};

export type DepartmentUpsertWithoutMembersInput = {
  create: DepartmentCreateWithoutMembersInput,
  update: DepartmentUpdateWithoutMembersDataInput,
};

export type DepartmentWhereInput = {
  AND?: Maybe<Array<DepartmentWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  members_every?: Maybe<UserWhereInput>,
  members_none?: Maybe<UserWhereInput>,
  members_some?: Maybe<UserWhereInput>,
  name?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<DepartmentWhereInput>>,
  OR?: Maybe<Array<DepartmentWhereInput>>,
};

export type DepartmentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Desdoble = {
   __typename?: 'Desdoble',
  asignatura: Asignatura,
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  lecciones?: Maybe<Leccion>,
  matriculas?: Maybe<Array<Matricula>>,
  mencion: Mencion,
  updatedAt: Scalars['DateTime'],
};


export type DesdobleMatriculasArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<MatriculaOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<MatriculaWhereInput>
};

export type DesdobleConnection = {
   __typename?: 'DesdobleConnection',
  aggregate: AggregateDesdoble,
  edges: Array<DesdobleEdge>,
  pageInfo: PageInfo,
};

export type DesdobleCreateInput = {
  asignatura: AsignaturaCreateOneWithoutDesdoblesInput,
  id?: Maybe<Scalars['ID']>,
  lecciones?: Maybe<LeccionCreateOneWithoutDesdoblesInput>,
  matriculas?: Maybe<MatriculaCreateManyWithoutDesdobleInput>,
  mencion: MencionCreateOneWithoutDesdoblesInput,
};

export type DesdobleCreateManyWithoutAsignaturaInput = {
  connect?: Maybe<Array<DesdobleWhereUniqueInput>>,
  create?: Maybe<Array<DesdobleCreateWithoutAsignaturaInput>>,
};

export type DesdobleCreateManyWithoutLeccionesInput = {
  connect?: Maybe<Array<DesdobleWhereUniqueInput>>,
  create?: Maybe<Array<DesdobleCreateWithoutLeccionesInput>>,
};

export type DesdobleCreateManyWithoutMencionInput = {
  connect?: Maybe<Array<DesdobleWhereUniqueInput>>,
  create?: Maybe<Array<DesdobleCreateWithoutMencionInput>>,
};

export type DesdobleCreateOneWithoutMatriculasInput = {
  connect?: Maybe<DesdobleWhereUniqueInput>,
  create?: Maybe<DesdobleCreateWithoutMatriculasInput>,
};

export type DesdobleCreateWithoutAsignaturaInput = {
  id?: Maybe<Scalars['ID']>,
  lecciones?: Maybe<LeccionCreateOneWithoutDesdoblesInput>,
  matriculas?: Maybe<MatriculaCreateManyWithoutDesdobleInput>,
  mencion: MencionCreateOneWithoutDesdoblesInput,
};

export type DesdobleCreateWithoutLeccionesInput = {
  asignatura: AsignaturaCreateOneWithoutDesdoblesInput,
  id?: Maybe<Scalars['ID']>,
  matriculas?: Maybe<MatriculaCreateManyWithoutDesdobleInput>,
  mencion: MencionCreateOneWithoutDesdoblesInput,
};

export type DesdobleCreateWithoutMatriculasInput = {
  asignatura: AsignaturaCreateOneWithoutDesdoblesInput,
  id?: Maybe<Scalars['ID']>,
  lecciones?: Maybe<LeccionCreateOneWithoutDesdoblesInput>,
  mencion: MencionCreateOneWithoutDesdoblesInput,
};

export type DesdobleCreateWithoutMencionInput = {
  asignatura: AsignaturaCreateOneWithoutDesdoblesInput,
  id?: Maybe<Scalars['ID']>,
  lecciones?: Maybe<LeccionCreateOneWithoutDesdoblesInput>,
  matriculas?: Maybe<MatriculaCreateManyWithoutDesdobleInput>,
};

export type DesdobleEdge = {
   __typename?: 'DesdobleEdge',
  cursor: Scalars['String'],
  node: Desdoble,
};

export enum DesdobleOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type DesdobleScalarWhereInput = {
  AND?: Maybe<Array<DesdobleScalarWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  NOT?: Maybe<Array<DesdobleScalarWhereInput>>,
  OR?: Maybe<Array<DesdobleScalarWhereInput>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type DesdobleUpdateInput = {
  asignatura?: Maybe<AsignaturaUpdateOneRequiredWithoutDesdoblesInput>,
  lecciones?: Maybe<LeccionUpdateOneWithoutDesdoblesInput>,
  matriculas?: Maybe<MatriculaUpdateManyWithoutDesdobleInput>,
  mencion?: Maybe<MencionUpdateOneRequiredWithoutDesdoblesInput>,
};

export type DesdobleUpdateManyWithoutAsignaturaInput = {
  connect?: Maybe<Array<DesdobleWhereUniqueInput>>,
  create?: Maybe<Array<DesdobleCreateWithoutAsignaturaInput>>,
  delete?: Maybe<Array<DesdobleWhereUniqueInput>>,
  deleteMany?: Maybe<Array<DesdobleScalarWhereInput>>,
  disconnect?: Maybe<Array<DesdobleWhereUniqueInput>>,
  set?: Maybe<Array<DesdobleWhereUniqueInput>>,
  update?: Maybe<Array<DesdobleUpdateWithWhereUniqueWithoutAsignaturaInput>>,
  upsert?: Maybe<Array<DesdobleUpsertWithWhereUniqueWithoutAsignaturaInput>>,
};

export type DesdobleUpdateManyWithoutLeccionesInput = {
  connect?: Maybe<Array<DesdobleWhereUniqueInput>>,
  create?: Maybe<Array<DesdobleCreateWithoutLeccionesInput>>,
  delete?: Maybe<Array<DesdobleWhereUniqueInput>>,
  deleteMany?: Maybe<Array<DesdobleScalarWhereInput>>,
  disconnect?: Maybe<Array<DesdobleWhereUniqueInput>>,
  set?: Maybe<Array<DesdobleWhereUniqueInput>>,
  update?: Maybe<Array<DesdobleUpdateWithWhereUniqueWithoutLeccionesInput>>,
  upsert?: Maybe<Array<DesdobleUpsertWithWhereUniqueWithoutLeccionesInput>>,
};

export type DesdobleUpdateManyWithoutMencionInput = {
  connect?: Maybe<Array<DesdobleWhereUniqueInput>>,
  create?: Maybe<Array<DesdobleCreateWithoutMencionInput>>,
  delete?: Maybe<Array<DesdobleWhereUniqueInput>>,
  deleteMany?: Maybe<Array<DesdobleScalarWhereInput>>,
  disconnect?: Maybe<Array<DesdobleWhereUniqueInput>>,
  set?: Maybe<Array<DesdobleWhereUniqueInput>>,
  update?: Maybe<Array<DesdobleUpdateWithWhereUniqueWithoutMencionInput>>,
  upsert?: Maybe<Array<DesdobleUpsertWithWhereUniqueWithoutMencionInput>>,
};

export type DesdobleUpdateOneRequiredWithoutMatriculasInput = {
  connect?: Maybe<DesdobleWhereUniqueInput>,
  create?: Maybe<DesdobleCreateWithoutMatriculasInput>,
  update?: Maybe<DesdobleUpdateWithoutMatriculasDataInput>,
  upsert?: Maybe<DesdobleUpsertWithoutMatriculasInput>,
};

export type DesdobleUpdateWithoutAsignaturaDataInput = {
  lecciones?: Maybe<LeccionUpdateOneWithoutDesdoblesInput>,
  matriculas?: Maybe<MatriculaUpdateManyWithoutDesdobleInput>,
  mencion?: Maybe<MencionUpdateOneRequiredWithoutDesdoblesInput>,
};

export type DesdobleUpdateWithoutLeccionesDataInput = {
  asignatura?: Maybe<AsignaturaUpdateOneRequiredWithoutDesdoblesInput>,
  matriculas?: Maybe<MatriculaUpdateManyWithoutDesdobleInput>,
  mencion?: Maybe<MencionUpdateOneRequiredWithoutDesdoblesInput>,
};

export type DesdobleUpdateWithoutMatriculasDataInput = {
  asignatura?: Maybe<AsignaturaUpdateOneRequiredWithoutDesdoblesInput>,
  lecciones?: Maybe<LeccionUpdateOneWithoutDesdoblesInput>,
  mencion?: Maybe<MencionUpdateOneRequiredWithoutDesdoblesInput>,
};

export type DesdobleUpdateWithoutMencionDataInput = {
  asignatura?: Maybe<AsignaturaUpdateOneRequiredWithoutDesdoblesInput>,
  lecciones?: Maybe<LeccionUpdateOneWithoutDesdoblesInput>,
  matriculas?: Maybe<MatriculaUpdateManyWithoutDesdobleInput>,
};

export type DesdobleUpdateWithWhereUniqueWithoutAsignaturaInput = {
  data: DesdobleUpdateWithoutAsignaturaDataInput,
  where: DesdobleWhereUniqueInput,
};

export type DesdobleUpdateWithWhereUniqueWithoutLeccionesInput = {
  data: DesdobleUpdateWithoutLeccionesDataInput,
  where: DesdobleWhereUniqueInput,
};

export type DesdobleUpdateWithWhereUniqueWithoutMencionInput = {
  data: DesdobleUpdateWithoutMencionDataInput,
  where: DesdobleWhereUniqueInput,
};

export type DesdobleUpsertWithoutMatriculasInput = {
  create: DesdobleCreateWithoutMatriculasInput,
  update: DesdobleUpdateWithoutMatriculasDataInput,
};

export type DesdobleUpsertWithWhereUniqueWithoutAsignaturaInput = {
  create: DesdobleCreateWithoutAsignaturaInput,
  update: DesdobleUpdateWithoutAsignaturaDataInput,
  where: DesdobleWhereUniqueInput,
};

export type DesdobleUpsertWithWhereUniqueWithoutLeccionesInput = {
  create: DesdobleCreateWithoutLeccionesInput,
  update: DesdobleUpdateWithoutLeccionesDataInput,
  where: DesdobleWhereUniqueInput,
};

export type DesdobleUpsertWithWhereUniqueWithoutMencionInput = {
  create: DesdobleCreateWithoutMencionInput,
  update: DesdobleUpdateWithoutMencionDataInput,
  where: DesdobleWhereUniqueInput,
};

export type DesdobleWhereInput = {
  AND?: Maybe<Array<DesdobleWhereInput>>,
  asignatura?: Maybe<AsignaturaWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  lecciones?: Maybe<LeccionWhereInput>,
  matriculas_every?: Maybe<MatriculaWhereInput>,
  matriculas_none?: Maybe<MatriculaWhereInput>,
  matriculas_some?: Maybe<MatriculaWhereInput>,
  mencion?: Maybe<MencionWhereInput>,
  NOT?: Maybe<Array<DesdobleWhereInput>>,
  OR?: Maybe<Array<DesdobleWhereInput>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type DesdobleWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Device = {
   __typename?: 'Device',
  countryCode?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  notificationsDevice?: Maybe<Scalars['String']>,
  notificationsPermission?: Maybe<Scalars['Boolean']>,
  number?: Maybe<Scalars['String']>,
  owner: User,
  type: DeviceType,
  updatedAt: Scalars['DateTime'],
  verified: Scalars['Boolean'],
};

export type DeviceConnection = {
   __typename?: 'DeviceConnection',
  aggregate: AggregateDevice,
  edges: Array<DeviceEdge>,
  pageInfo: PageInfo,
};

export type DeviceCreateInput = {
  countryCode?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  notificationsDevice?: Maybe<Scalars['String']>,
  notificationsPermission?: Maybe<Scalars['Boolean']>,
  number?: Maybe<Scalars['String']>,
  owner: UserCreateOneWithoutDevicesInput,
  type?: Maybe<DeviceType>,
  verified?: Maybe<Scalars['Boolean']>,
};

export type DeviceCreateManyWithoutOwnerInput = {
  connect?: Maybe<Array<DeviceWhereUniqueInput>>,
  create?: Maybe<Array<DeviceCreateWithoutOwnerInput>>,
};

export type DeviceCreateWithoutOwnerInput = {
  countryCode?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  notificationsDevice?: Maybe<Scalars['String']>,
  notificationsPermission?: Maybe<Scalars['Boolean']>,
  number?: Maybe<Scalars['String']>,
  type?: Maybe<DeviceType>,
  verified?: Maybe<Scalars['Boolean']>,
};

export type DeviceEdge = {
   __typename?: 'DeviceEdge',
  cursor: Scalars['String'],
  node: Device,
};

export enum DeviceOrderByInput {
  CountryCodeAsc = 'countryCode_ASC',
  CountryCodeDesc = 'countryCode_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NotificationsDeviceAsc = 'notificationsDevice_ASC',
  NotificationsDeviceDesc = 'notificationsDevice_DESC',
  NotificationsPermissionAsc = 'notificationsPermission_ASC',
  NotificationsPermissionDesc = 'notificationsPermission_DESC',
  NumberAsc = 'number_ASC',
  NumberDesc = 'number_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VerifiedAsc = 'verified_ASC',
  VerifiedDesc = 'verified_DESC'
}

export type DeviceScalarWhereInput = {
  AND?: Maybe<Array<DeviceScalarWhereInput>>,
  countryCode?: Maybe<Scalars['String']>,
  countryCode_contains?: Maybe<Scalars['String']>,
  countryCode_ends_with?: Maybe<Scalars['String']>,
  countryCode_gt?: Maybe<Scalars['String']>,
  countryCode_gte?: Maybe<Scalars['String']>,
  countryCode_in?: Maybe<Array<Scalars['String']>>,
  countryCode_lt?: Maybe<Scalars['String']>,
  countryCode_lte?: Maybe<Scalars['String']>,
  countryCode_not?: Maybe<Scalars['String']>,
  countryCode_not_contains?: Maybe<Scalars['String']>,
  countryCode_not_ends_with?: Maybe<Scalars['String']>,
  countryCode_not_in?: Maybe<Array<Scalars['String']>>,
  countryCode_not_starts_with?: Maybe<Scalars['String']>,
  countryCode_starts_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  NOT?: Maybe<Array<DeviceScalarWhereInput>>,
  notificationsDevice?: Maybe<Scalars['String']>,
  notificationsDevice_contains?: Maybe<Scalars['String']>,
  notificationsDevice_ends_with?: Maybe<Scalars['String']>,
  notificationsDevice_gt?: Maybe<Scalars['String']>,
  notificationsDevice_gte?: Maybe<Scalars['String']>,
  notificationsDevice_in?: Maybe<Array<Scalars['String']>>,
  notificationsDevice_lt?: Maybe<Scalars['String']>,
  notificationsDevice_lte?: Maybe<Scalars['String']>,
  notificationsDevice_not?: Maybe<Scalars['String']>,
  notificationsDevice_not_contains?: Maybe<Scalars['String']>,
  notificationsDevice_not_ends_with?: Maybe<Scalars['String']>,
  notificationsDevice_not_in?: Maybe<Array<Scalars['String']>>,
  notificationsDevice_not_starts_with?: Maybe<Scalars['String']>,
  notificationsDevice_starts_with?: Maybe<Scalars['String']>,
  notificationsPermission?: Maybe<Scalars['Boolean']>,
  notificationsPermission_not?: Maybe<Scalars['Boolean']>,
  number?: Maybe<Scalars['String']>,
  number_contains?: Maybe<Scalars['String']>,
  number_ends_with?: Maybe<Scalars['String']>,
  number_gt?: Maybe<Scalars['String']>,
  number_gte?: Maybe<Scalars['String']>,
  number_in?: Maybe<Array<Scalars['String']>>,
  number_lt?: Maybe<Scalars['String']>,
  number_lte?: Maybe<Scalars['String']>,
  number_not?: Maybe<Scalars['String']>,
  number_not_contains?: Maybe<Scalars['String']>,
  number_not_ends_with?: Maybe<Scalars['String']>,
  number_not_in?: Maybe<Array<Scalars['String']>>,
  number_not_starts_with?: Maybe<Scalars['String']>,
  number_starts_with?: Maybe<Scalars['String']>,
  OR?: Maybe<Array<DeviceScalarWhereInput>>,
  type?: Maybe<DeviceType>,
  type_in?: Maybe<Array<DeviceType>>,
  type_not?: Maybe<DeviceType>,
  type_not_in?: Maybe<Array<DeviceType>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  verified?: Maybe<Scalars['Boolean']>,
  verified_not?: Maybe<Scalars['Boolean']>,
};

export enum DeviceType {
  Other = 'OTHER',
  Phone = 'PHONE',
  Tablet = 'TABLET'
}

export type DeviceUpdateInput = {
  countryCode?: Maybe<Scalars['String']>,
  notificationsDevice?: Maybe<Scalars['String']>,
  notificationsPermission?: Maybe<Scalars['Boolean']>,
  number?: Maybe<Scalars['String']>,
  owner?: Maybe<UserUpdateOneRequiredWithoutDevicesInput>,
  type?: Maybe<DeviceType>,
  verified?: Maybe<Scalars['Boolean']>,
};

export type DeviceUpdateManyDataInput = {
  countryCode?: Maybe<Scalars['String']>,
  notificationsDevice?: Maybe<Scalars['String']>,
  notificationsPermission?: Maybe<Scalars['Boolean']>,
  number?: Maybe<Scalars['String']>,
  type?: Maybe<DeviceType>,
  verified?: Maybe<Scalars['Boolean']>,
};

export type DeviceUpdateManyMutationInput = {
  countryCode?: Maybe<Scalars['String']>,
  notificationsDevice?: Maybe<Scalars['String']>,
  notificationsPermission?: Maybe<Scalars['Boolean']>,
  number?: Maybe<Scalars['String']>,
  type?: Maybe<DeviceType>,
  verified?: Maybe<Scalars['Boolean']>,
};

export type DeviceUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<DeviceWhereUniqueInput>>,
  create?: Maybe<Array<DeviceCreateWithoutOwnerInput>>,
  delete?: Maybe<Array<DeviceWhereUniqueInput>>,
  deleteMany?: Maybe<Array<DeviceScalarWhereInput>>,
  disconnect?: Maybe<Array<DeviceWhereUniqueInput>>,
  set?: Maybe<Array<DeviceWhereUniqueInput>>,
  update?: Maybe<Array<DeviceUpdateWithWhereUniqueWithoutOwnerInput>>,
  updateMany?: Maybe<Array<DeviceUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<DeviceUpsertWithWhereUniqueWithoutOwnerInput>>,
};

export type DeviceUpdateManyWithWhereNestedInput = {
  data: DeviceUpdateManyDataInput,
  where: DeviceScalarWhereInput,
};

export type DeviceUpdateWithoutOwnerDataInput = {
  countryCode?: Maybe<Scalars['String']>,
  notificationsDevice?: Maybe<Scalars['String']>,
  notificationsPermission?: Maybe<Scalars['Boolean']>,
  number?: Maybe<Scalars['String']>,
  type?: Maybe<DeviceType>,
  verified?: Maybe<Scalars['Boolean']>,
};

export type DeviceUpdateWithWhereUniqueWithoutOwnerInput = {
  data: DeviceUpdateWithoutOwnerDataInput,
  where: DeviceWhereUniqueInput,
};

export type DeviceUpsertWithWhereUniqueWithoutOwnerInput = {
  create: DeviceCreateWithoutOwnerInput,
  update: DeviceUpdateWithoutOwnerDataInput,
  where: DeviceWhereUniqueInput,
};

export type DeviceWhereInput = {
  AND?: Maybe<Array<DeviceWhereInput>>,
  countryCode?: Maybe<Scalars['String']>,
  countryCode_contains?: Maybe<Scalars['String']>,
  countryCode_ends_with?: Maybe<Scalars['String']>,
  countryCode_gt?: Maybe<Scalars['String']>,
  countryCode_gte?: Maybe<Scalars['String']>,
  countryCode_in?: Maybe<Array<Scalars['String']>>,
  countryCode_lt?: Maybe<Scalars['String']>,
  countryCode_lte?: Maybe<Scalars['String']>,
  countryCode_not?: Maybe<Scalars['String']>,
  countryCode_not_contains?: Maybe<Scalars['String']>,
  countryCode_not_ends_with?: Maybe<Scalars['String']>,
  countryCode_not_in?: Maybe<Array<Scalars['String']>>,
  countryCode_not_starts_with?: Maybe<Scalars['String']>,
  countryCode_starts_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  NOT?: Maybe<Array<DeviceWhereInput>>,
  notificationsDevice?: Maybe<Scalars['String']>,
  notificationsDevice_contains?: Maybe<Scalars['String']>,
  notificationsDevice_ends_with?: Maybe<Scalars['String']>,
  notificationsDevice_gt?: Maybe<Scalars['String']>,
  notificationsDevice_gte?: Maybe<Scalars['String']>,
  notificationsDevice_in?: Maybe<Array<Scalars['String']>>,
  notificationsDevice_lt?: Maybe<Scalars['String']>,
  notificationsDevice_lte?: Maybe<Scalars['String']>,
  notificationsDevice_not?: Maybe<Scalars['String']>,
  notificationsDevice_not_contains?: Maybe<Scalars['String']>,
  notificationsDevice_not_ends_with?: Maybe<Scalars['String']>,
  notificationsDevice_not_in?: Maybe<Array<Scalars['String']>>,
  notificationsDevice_not_starts_with?: Maybe<Scalars['String']>,
  notificationsDevice_starts_with?: Maybe<Scalars['String']>,
  notificationsPermission?: Maybe<Scalars['Boolean']>,
  notificationsPermission_not?: Maybe<Scalars['Boolean']>,
  number?: Maybe<Scalars['String']>,
  number_contains?: Maybe<Scalars['String']>,
  number_ends_with?: Maybe<Scalars['String']>,
  number_gt?: Maybe<Scalars['String']>,
  number_gte?: Maybe<Scalars['String']>,
  number_in?: Maybe<Array<Scalars['String']>>,
  number_lt?: Maybe<Scalars['String']>,
  number_lte?: Maybe<Scalars['String']>,
  number_not?: Maybe<Scalars['String']>,
  number_not_contains?: Maybe<Scalars['String']>,
  number_not_ends_with?: Maybe<Scalars['String']>,
  number_not_in?: Maybe<Array<Scalars['String']>>,
  number_not_starts_with?: Maybe<Scalars['String']>,
  number_starts_with?: Maybe<Scalars['String']>,
  OR?: Maybe<Array<DeviceWhereInput>>,
  owner?: Maybe<UserWhereInput>,
  type?: Maybe<DeviceType>,
  type_in?: Maybe<Array<DeviceType>>,
  type_not?: Maybe<DeviceType>,
  type_not_in?: Maybe<Array<DeviceType>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  verified?: Maybe<Scalars['Boolean']>,
  verified_not?: Maybe<Scalars['Boolean']>,
};

export type DeviceWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  notificationsDevice?: Maybe<Scalars['String']>,
};

export type Discount = {
   __typename?: 'Discount',
  code?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  description: Scalars['String'],
  discountRequests?: Maybe<Array<DiscountRequest>>,
  id: Scalars['ID'],
  name: Scalars['String'],
  product: Product,
  requirements: Scalars['String'],
  unitPrice: Scalars['Float'],
  updatedAt: Scalars['DateTime'],
};


export type DiscountDiscountRequestsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<DiscountRequestOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<DiscountRequestWhereInput>
};

export type DiscountConnection = {
   __typename?: 'DiscountConnection',
  aggregate: AggregateDiscount,
  edges: Array<DiscountEdge>,
  pageInfo: PageInfo,
};

export type DiscountCreateInput = {
  code?: Maybe<Scalars['String']>,
  description: Scalars['String'],
  discountRequests?: Maybe<DiscountRequestCreateManyWithoutDiscountInput>,
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  product: ProductCreateOneWithoutDiscountsInput,
  requirements: Scalars['String'],
  unitPrice: Scalars['Float'],
};

export type DiscountCreateManyWithoutProductInput = {
  connect?: Maybe<Array<DiscountWhereUniqueInput>>,
  create?: Maybe<Array<DiscountCreateWithoutProductInput>>,
};

export type DiscountCreateOneInput = {
  connect?: Maybe<DiscountWhereUniqueInput>,
  create?: Maybe<DiscountCreateInput>,
};

export type DiscountCreateOneWithoutDiscountRequestsInput = {
  connect?: Maybe<DiscountWhereUniqueInput>,
  create?: Maybe<DiscountCreateWithoutDiscountRequestsInput>,
};

export type DiscountCreateWithoutDiscountRequestsInput = {
  code?: Maybe<Scalars['String']>,
  description: Scalars['String'],
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  product: ProductCreateOneWithoutDiscountsInput,
  requirements: Scalars['String'],
  unitPrice: Scalars['Float'],
};

export type DiscountCreateWithoutProductInput = {
  code?: Maybe<Scalars['String']>,
  description: Scalars['String'],
  discountRequests?: Maybe<DiscountRequestCreateManyWithoutDiscountInput>,
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  requirements: Scalars['String'],
  unitPrice: Scalars['Float'],
};

export type DiscountEdge = {
   __typename?: 'DiscountEdge',
  cursor: Scalars['String'],
  node: Discount,
};

export enum DiscountOrderByInput {
  CodeAsc = 'code_ASC',
  CodeDesc = 'code_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RequirementsAsc = 'requirements_ASC',
  RequirementsDesc = 'requirements_DESC',
  UnitPriceAsc = 'unitPrice_ASC',
  UnitPriceDesc = 'unitPrice_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type DiscountRequest = {
   __typename?: 'DiscountRequest',
  applied: Scalars['Boolean'],
  approved: Scalars['Boolean'],
  createdAt: Scalars['DateTime'],
  discount: Discount,
  documentation: Array<Scalars['String']>,
  id: Scalars['ID'],
  updatedAt: Scalars['DateTime'],
  user: User,
};

export type DiscountRequestConnection = {
   __typename?: 'DiscountRequestConnection',
  aggregate: AggregateDiscountRequest,
  edges: Array<DiscountRequestEdge>,
  pageInfo: PageInfo,
};

export type DiscountRequestCreatedocumentationInput = {
  set?: Maybe<Array<Scalars['String']>>,
};

export type DiscountRequestCreateInput = {
  applied?: Maybe<Scalars['Boolean']>,
  approved?: Maybe<Scalars['Boolean']>,
  discount: DiscountCreateOneWithoutDiscountRequestsInput,
  documentation?: Maybe<DiscountRequestCreatedocumentationInput>,
  id?: Maybe<Scalars['ID']>,
  user: UserCreateOneWithoutDiscountRequestsInput,
};

export type DiscountRequestCreateManyWithoutDiscountInput = {
  connect?: Maybe<Array<DiscountRequestWhereUniqueInput>>,
  create?: Maybe<Array<DiscountRequestCreateWithoutDiscountInput>>,
};

export type DiscountRequestCreateManyWithoutUserInput = {
  connect?: Maybe<Array<DiscountRequestWhereUniqueInput>>,
  create?: Maybe<Array<DiscountRequestCreateWithoutUserInput>>,
};

export type DiscountRequestCreateWithoutDiscountInput = {
  applied?: Maybe<Scalars['Boolean']>,
  approved?: Maybe<Scalars['Boolean']>,
  documentation?: Maybe<DiscountRequestCreatedocumentationInput>,
  id?: Maybe<Scalars['ID']>,
  user: UserCreateOneWithoutDiscountRequestsInput,
};

export type DiscountRequestCreateWithoutUserInput = {
  applied?: Maybe<Scalars['Boolean']>,
  approved?: Maybe<Scalars['Boolean']>,
  discount: DiscountCreateOneWithoutDiscountRequestsInput,
  documentation?: Maybe<DiscountRequestCreatedocumentationInput>,
  id?: Maybe<Scalars['ID']>,
};

export type DiscountRequestEdge = {
   __typename?: 'DiscountRequestEdge',
  cursor: Scalars['String'],
  node: DiscountRequest,
};

export enum DiscountRequestOrderByInput {
  AppliedAsc = 'applied_ASC',
  AppliedDesc = 'applied_DESC',
  ApprovedAsc = 'approved_ASC',
  ApprovedDesc = 'approved_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type DiscountRequestScalarWhereInput = {
  AND?: Maybe<Array<DiscountRequestScalarWhereInput>>,
  applied?: Maybe<Scalars['Boolean']>,
  applied_not?: Maybe<Scalars['Boolean']>,
  approved?: Maybe<Scalars['Boolean']>,
  approved_not?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  NOT?: Maybe<Array<DiscountRequestScalarWhereInput>>,
  OR?: Maybe<Array<DiscountRequestScalarWhereInput>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type DiscountRequestUpdatedocumentationInput = {
  set?: Maybe<Array<Scalars['String']>>,
};

export type DiscountRequestUpdateInput = {
  applied?: Maybe<Scalars['Boolean']>,
  approved?: Maybe<Scalars['Boolean']>,
  discount?: Maybe<DiscountUpdateOneRequiredWithoutDiscountRequestsInput>,
  documentation?: Maybe<DiscountRequestUpdatedocumentationInput>,
  user?: Maybe<UserUpdateOneRequiredWithoutDiscountRequestsInput>,
};

export type DiscountRequestUpdateManyDataInput = {
  applied?: Maybe<Scalars['Boolean']>,
  approved?: Maybe<Scalars['Boolean']>,
  documentation?: Maybe<DiscountRequestUpdatedocumentationInput>,
};

export type DiscountRequestUpdateManyMutationInput = {
  applied?: Maybe<Scalars['Boolean']>,
  approved?: Maybe<Scalars['Boolean']>,
  documentation?: Maybe<DiscountRequestUpdatedocumentationInput>,
};

export type DiscountRequestUpdateManyWithoutDiscountInput = {
  connect?: Maybe<Array<DiscountRequestWhereUniqueInput>>,
  create?: Maybe<Array<DiscountRequestCreateWithoutDiscountInput>>,
  delete?: Maybe<Array<DiscountRequestWhereUniqueInput>>,
  deleteMany?: Maybe<Array<DiscountRequestScalarWhereInput>>,
  disconnect?: Maybe<Array<DiscountRequestWhereUniqueInput>>,
  set?: Maybe<Array<DiscountRequestWhereUniqueInput>>,
  update?: Maybe<Array<DiscountRequestUpdateWithWhereUniqueWithoutDiscountInput>>,
  updateMany?: Maybe<Array<DiscountRequestUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<DiscountRequestUpsertWithWhereUniqueWithoutDiscountInput>>,
};

export type DiscountRequestUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<DiscountRequestWhereUniqueInput>>,
  create?: Maybe<Array<DiscountRequestCreateWithoutUserInput>>,
  delete?: Maybe<Array<DiscountRequestWhereUniqueInput>>,
  deleteMany?: Maybe<Array<DiscountRequestScalarWhereInput>>,
  disconnect?: Maybe<Array<DiscountRequestWhereUniqueInput>>,
  set?: Maybe<Array<DiscountRequestWhereUniqueInput>>,
  update?: Maybe<Array<DiscountRequestUpdateWithWhereUniqueWithoutUserInput>>,
  updateMany?: Maybe<Array<DiscountRequestUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<DiscountRequestUpsertWithWhereUniqueWithoutUserInput>>,
};

export type DiscountRequestUpdateManyWithWhereNestedInput = {
  data: DiscountRequestUpdateManyDataInput,
  where: DiscountRequestScalarWhereInput,
};

export type DiscountRequestUpdateWithoutDiscountDataInput = {
  applied?: Maybe<Scalars['Boolean']>,
  approved?: Maybe<Scalars['Boolean']>,
  documentation?: Maybe<DiscountRequestUpdatedocumentationInput>,
  user?: Maybe<UserUpdateOneRequiredWithoutDiscountRequestsInput>,
};

export type DiscountRequestUpdateWithoutUserDataInput = {
  applied?: Maybe<Scalars['Boolean']>,
  approved?: Maybe<Scalars['Boolean']>,
  discount?: Maybe<DiscountUpdateOneRequiredWithoutDiscountRequestsInput>,
  documentation?: Maybe<DiscountRequestUpdatedocumentationInput>,
};

export type DiscountRequestUpdateWithWhereUniqueWithoutDiscountInput = {
  data: DiscountRequestUpdateWithoutDiscountDataInput,
  where: DiscountRequestWhereUniqueInput,
};

export type DiscountRequestUpdateWithWhereUniqueWithoutUserInput = {
  data: DiscountRequestUpdateWithoutUserDataInput,
  where: DiscountRequestWhereUniqueInput,
};

export type DiscountRequestUpsertWithWhereUniqueWithoutDiscountInput = {
  create: DiscountRequestCreateWithoutDiscountInput,
  update: DiscountRequestUpdateWithoutDiscountDataInput,
  where: DiscountRequestWhereUniqueInput,
};

export type DiscountRequestUpsertWithWhereUniqueWithoutUserInput = {
  create: DiscountRequestCreateWithoutUserInput,
  update: DiscountRequestUpdateWithoutUserDataInput,
  where: DiscountRequestWhereUniqueInput,
};

export type DiscountRequestWhereInput = {
  AND?: Maybe<Array<DiscountRequestWhereInput>>,
  applied?: Maybe<Scalars['Boolean']>,
  applied_not?: Maybe<Scalars['Boolean']>,
  approved?: Maybe<Scalars['Boolean']>,
  approved_not?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  discount?: Maybe<DiscountWhereInput>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  NOT?: Maybe<Array<DiscountRequestWhereInput>>,
  OR?: Maybe<Array<DiscountRequestWhereInput>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  user?: Maybe<UserWhereInput>,
};

export type DiscountRequestWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type DiscountScalarWhereInput = {
  AND?: Maybe<Array<DiscountScalarWhereInput>>,
  code?: Maybe<Scalars['String']>,
  code_contains?: Maybe<Scalars['String']>,
  code_ends_with?: Maybe<Scalars['String']>,
  code_gt?: Maybe<Scalars['String']>,
  code_gte?: Maybe<Scalars['String']>,
  code_in?: Maybe<Array<Scalars['String']>>,
  code_lt?: Maybe<Scalars['String']>,
  code_lte?: Maybe<Scalars['String']>,
  code_not?: Maybe<Scalars['String']>,
  code_not_contains?: Maybe<Scalars['String']>,
  code_not_ends_with?: Maybe<Scalars['String']>,
  code_not_in?: Maybe<Array<Scalars['String']>>,
  code_not_starts_with?: Maybe<Scalars['String']>,
  code_starts_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  description?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<DiscountScalarWhereInput>>,
  OR?: Maybe<Array<DiscountScalarWhereInput>>,
  requirements?: Maybe<Scalars['String']>,
  requirements_contains?: Maybe<Scalars['String']>,
  requirements_ends_with?: Maybe<Scalars['String']>,
  requirements_gt?: Maybe<Scalars['String']>,
  requirements_gte?: Maybe<Scalars['String']>,
  requirements_in?: Maybe<Array<Scalars['String']>>,
  requirements_lt?: Maybe<Scalars['String']>,
  requirements_lte?: Maybe<Scalars['String']>,
  requirements_not?: Maybe<Scalars['String']>,
  requirements_not_contains?: Maybe<Scalars['String']>,
  requirements_not_ends_with?: Maybe<Scalars['String']>,
  requirements_not_in?: Maybe<Array<Scalars['String']>>,
  requirements_not_starts_with?: Maybe<Scalars['String']>,
  requirements_starts_with?: Maybe<Scalars['String']>,
  unitPrice?: Maybe<Scalars['Float']>,
  unitPrice_gt?: Maybe<Scalars['Float']>,
  unitPrice_gte?: Maybe<Scalars['Float']>,
  unitPrice_in?: Maybe<Array<Scalars['Float']>>,
  unitPrice_lt?: Maybe<Scalars['Float']>,
  unitPrice_lte?: Maybe<Scalars['Float']>,
  unitPrice_not?: Maybe<Scalars['Float']>,
  unitPrice_not_in?: Maybe<Array<Scalars['Float']>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type DiscountUpdateDataInput = {
  code?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  discountRequests?: Maybe<DiscountRequestUpdateManyWithoutDiscountInput>,
  name?: Maybe<Scalars['String']>,
  product?: Maybe<ProductUpdateOneRequiredWithoutDiscountsInput>,
  requirements?: Maybe<Scalars['String']>,
  unitPrice?: Maybe<Scalars['Float']>,
};

export type DiscountUpdateInput = {
  code?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  discountRequests?: Maybe<DiscountRequestUpdateManyWithoutDiscountInput>,
  name?: Maybe<Scalars['String']>,
  product?: Maybe<ProductUpdateOneRequiredWithoutDiscountsInput>,
  requirements?: Maybe<Scalars['String']>,
  unitPrice?: Maybe<Scalars['Float']>,
};

export type DiscountUpdateManyDataInput = {
  code?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  requirements?: Maybe<Scalars['String']>,
  unitPrice?: Maybe<Scalars['Float']>,
};

export type DiscountUpdateManyMutationInput = {
  code?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  requirements?: Maybe<Scalars['String']>,
  unitPrice?: Maybe<Scalars['Float']>,
};

export type DiscountUpdateManyWithoutProductInput = {
  connect?: Maybe<Array<DiscountWhereUniqueInput>>,
  create?: Maybe<Array<DiscountCreateWithoutProductInput>>,
  delete?: Maybe<Array<DiscountWhereUniqueInput>>,
  deleteMany?: Maybe<Array<DiscountScalarWhereInput>>,
  disconnect?: Maybe<Array<DiscountWhereUniqueInput>>,
  set?: Maybe<Array<DiscountWhereUniqueInput>>,
  update?: Maybe<Array<DiscountUpdateWithWhereUniqueWithoutProductInput>>,
  updateMany?: Maybe<Array<DiscountUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<DiscountUpsertWithWhereUniqueWithoutProductInput>>,
};

export type DiscountUpdateManyWithWhereNestedInput = {
  data: DiscountUpdateManyDataInput,
  where: DiscountScalarWhereInput,
};

export type DiscountUpdateOneInput = {
  connect?: Maybe<DiscountWhereUniqueInput>,
  create?: Maybe<DiscountCreateInput>,
  delete?: Maybe<Scalars['Boolean']>,
  disconnect?: Maybe<Scalars['Boolean']>,
  update?: Maybe<DiscountUpdateDataInput>,
  upsert?: Maybe<DiscountUpsertNestedInput>,
};

export type DiscountUpdateOneRequiredWithoutDiscountRequestsInput = {
  connect?: Maybe<DiscountWhereUniqueInput>,
  create?: Maybe<DiscountCreateWithoutDiscountRequestsInput>,
  update?: Maybe<DiscountUpdateWithoutDiscountRequestsDataInput>,
  upsert?: Maybe<DiscountUpsertWithoutDiscountRequestsInput>,
};

export type DiscountUpdateWithoutDiscountRequestsDataInput = {
  code?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  product?: Maybe<ProductUpdateOneRequiredWithoutDiscountsInput>,
  requirements?: Maybe<Scalars['String']>,
  unitPrice?: Maybe<Scalars['Float']>,
};

export type DiscountUpdateWithoutProductDataInput = {
  code?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  discountRequests?: Maybe<DiscountRequestUpdateManyWithoutDiscountInput>,
  name?: Maybe<Scalars['String']>,
  requirements?: Maybe<Scalars['String']>,
  unitPrice?: Maybe<Scalars['Float']>,
};

export type DiscountUpdateWithWhereUniqueWithoutProductInput = {
  data: DiscountUpdateWithoutProductDataInput,
  where: DiscountWhereUniqueInput,
};

export type DiscountUpsertNestedInput = {
  create: DiscountCreateInput,
  update: DiscountUpdateDataInput,
};

export type DiscountUpsertWithoutDiscountRequestsInput = {
  create: DiscountCreateWithoutDiscountRequestsInput,
  update: DiscountUpdateWithoutDiscountRequestsDataInput,
};

export type DiscountUpsertWithWhereUniqueWithoutProductInput = {
  create: DiscountCreateWithoutProductInput,
  update: DiscountUpdateWithoutProductDataInput,
  where: DiscountWhereUniqueInput,
};

export type DiscountWhereInput = {
  AND?: Maybe<Array<DiscountWhereInput>>,
  code?: Maybe<Scalars['String']>,
  code_contains?: Maybe<Scalars['String']>,
  code_ends_with?: Maybe<Scalars['String']>,
  code_gt?: Maybe<Scalars['String']>,
  code_gte?: Maybe<Scalars['String']>,
  code_in?: Maybe<Array<Scalars['String']>>,
  code_lt?: Maybe<Scalars['String']>,
  code_lte?: Maybe<Scalars['String']>,
  code_not?: Maybe<Scalars['String']>,
  code_not_contains?: Maybe<Scalars['String']>,
  code_not_ends_with?: Maybe<Scalars['String']>,
  code_not_in?: Maybe<Array<Scalars['String']>>,
  code_not_starts_with?: Maybe<Scalars['String']>,
  code_starts_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  description?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  discountRequests_every?: Maybe<DiscountRequestWhereInput>,
  discountRequests_none?: Maybe<DiscountRequestWhereInput>,
  discountRequests_some?: Maybe<DiscountRequestWhereInput>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<DiscountWhereInput>>,
  OR?: Maybe<Array<DiscountWhereInput>>,
  product?: Maybe<ProductWhereInput>,
  requirements?: Maybe<Scalars['String']>,
  requirements_contains?: Maybe<Scalars['String']>,
  requirements_ends_with?: Maybe<Scalars['String']>,
  requirements_gt?: Maybe<Scalars['String']>,
  requirements_gte?: Maybe<Scalars['String']>,
  requirements_in?: Maybe<Array<Scalars['String']>>,
  requirements_lt?: Maybe<Scalars['String']>,
  requirements_lte?: Maybe<Scalars['String']>,
  requirements_not?: Maybe<Scalars['String']>,
  requirements_not_contains?: Maybe<Scalars['String']>,
  requirements_not_ends_with?: Maybe<Scalars['String']>,
  requirements_not_in?: Maybe<Array<Scalars['String']>>,
  requirements_not_starts_with?: Maybe<Scalars['String']>,
  requirements_starts_with?: Maybe<Scalars['String']>,
  unitPrice?: Maybe<Scalars['Float']>,
  unitPrice_gt?: Maybe<Scalars['Float']>,
  unitPrice_gte?: Maybe<Scalars['Float']>,
  unitPrice_in?: Maybe<Array<Scalars['Float']>>,
  unitPrice_lt?: Maybe<Scalars['Float']>,
  unitPrice_lte?: Maybe<Scalars['Float']>,
  unitPrice_not?: Maybe<Scalars['Float']>,
  unitPrice_not_in?: Maybe<Array<Scalars['Float']>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type DiscountWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Estudio = {
   __typename?: 'Estudio',
  createdAt: Scalars['DateTime'],
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name: Scalars['String'],
  shortName: Scalars['String'],
  titulaciones?: Maybe<Array<Titulacion>>,
  updatedAt: Scalars['DateTime'],
};


export type EstudioTitulacionesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<TitulacionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<TitulacionWhereInput>
};

export type EstudioConnection = {
   __typename?: 'EstudioConnection',
  aggregate: AggregateEstudio,
  edges: Array<EstudioEdge>,
  pageInfo: PageInfo,
};

export type EstudioCreateInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  shortName: Scalars['String'],
  titulaciones?: Maybe<TitulacionCreateManyWithoutEstudioInput>,
};

export type EstudioCreateOneWithoutTitulacionesInput = {
  connect?: Maybe<EstudioWhereUniqueInput>,
  create?: Maybe<EstudioCreateWithoutTitulacionesInput>,
};

export type EstudioCreateWithoutTitulacionesInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  shortName: Scalars['String'],
};

export type EstudioEdge = {
   __typename?: 'EstudioEdge',
  cursor: Scalars['String'],
  node: Estudio,
};

export enum EstudioOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ShortNameAsc = 'shortName_ASC',
  ShortNameDesc = 'shortName_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type EstudioUpdateInput = {
  description?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
  titulaciones?: Maybe<TitulacionUpdateManyWithoutEstudioInput>,
};

export type EstudioUpdateManyMutationInput = {
  description?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
};

export type EstudioUpdateOneRequiredWithoutTitulacionesInput = {
  connect?: Maybe<EstudioWhereUniqueInput>,
  create?: Maybe<EstudioCreateWithoutTitulacionesInput>,
  update?: Maybe<EstudioUpdateWithoutTitulacionesDataInput>,
  upsert?: Maybe<EstudioUpsertWithoutTitulacionesInput>,
};

export type EstudioUpdateWithoutTitulacionesDataInput = {
  description?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
};

export type EstudioUpsertWithoutTitulacionesInput = {
  create: EstudioCreateWithoutTitulacionesInput,
  update: EstudioUpdateWithoutTitulacionesDataInput,
};

export type EstudioWhereInput = {
  AND?: Maybe<Array<EstudioWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  description?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<EstudioWhereInput>>,
  OR?: Maybe<Array<EstudioWhereInput>>,
  shortName?: Maybe<Scalars['String']>,
  shortName_contains?: Maybe<Scalars['String']>,
  shortName_ends_with?: Maybe<Scalars['String']>,
  shortName_gt?: Maybe<Scalars['String']>,
  shortName_gte?: Maybe<Scalars['String']>,
  shortName_in?: Maybe<Array<Scalars['String']>>,
  shortName_lt?: Maybe<Scalars['String']>,
  shortName_lte?: Maybe<Scalars['String']>,
  shortName_not?: Maybe<Scalars['String']>,
  shortName_not_contains?: Maybe<Scalars['String']>,
  shortName_not_ends_with?: Maybe<Scalars['String']>,
  shortName_not_in?: Maybe<Array<Scalars['String']>>,
  shortName_not_starts_with?: Maybe<Scalars['String']>,
  shortName_starts_with?: Maybe<Scalars['String']>,
  titulaciones_every?: Maybe<TitulacionWhereInput>,
  titulaciones_none?: Maybe<TitulacionWhereInput>,
  titulaciones_some?: Maybe<TitulacionWhereInput>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type EstudioWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
};

export type Event = {
   __typename?: 'Event',
  access?: Maybe<Scalars['String']>,
  accessPoint?: Maybe<Scalars['String']>,
  author: User,
  body: Scalars['String'],
  createdAt: Scalars['DateTime'],
  date: Scalars['DateTime'],
  id: Scalars['ID'],
  imageURL?: Maybe<Scalars['String']>,
  organizer?: Maybe<Scalars['String']>,
  place: Space,
  status: AppNodeStatus,
  subtitle?: Maybe<Scalars['String']>,
  target: UserGroup,
  title: Scalars['String'],
  updatedAt: Scalars['DateTime'],
};

export type EventConnection = {
   __typename?: 'EventConnection',
  aggregate: AggregateEvent,
  edges: Array<EventEdge>,
  pageInfo: PageInfo,
};

export type EventCreateInput = {
  access?: Maybe<Scalars['String']>,
  accessPoint?: Maybe<Scalars['String']>,
  author: UserCreateOneWithoutEventsInput,
  body: Scalars['String'],
  date: Scalars['DateTime'],
  id?: Maybe<Scalars['ID']>,
  imageURL?: Maybe<Scalars['String']>,
  organizer?: Maybe<Scalars['String']>,
  place: SpaceCreateOneWithoutEventsInput,
  status?: Maybe<AppNodeStatus>,
  subtitle?: Maybe<Scalars['String']>,
  target: UserGroup,
  title: Scalars['String'],
};

export type EventCreateManyWithoutAuthorInput = {
  connect?: Maybe<Array<EventWhereUniqueInput>>,
  create?: Maybe<Array<EventCreateWithoutAuthorInput>>,
};

export type EventCreateManyWithoutPlaceInput = {
  connect?: Maybe<Array<EventWhereUniqueInput>>,
  create?: Maybe<Array<EventCreateWithoutPlaceInput>>,
};

export type EventCreateWithoutAuthorInput = {
  access?: Maybe<Scalars['String']>,
  accessPoint?: Maybe<Scalars['String']>,
  body: Scalars['String'],
  date: Scalars['DateTime'],
  id?: Maybe<Scalars['ID']>,
  imageURL?: Maybe<Scalars['String']>,
  organizer?: Maybe<Scalars['String']>,
  place: SpaceCreateOneWithoutEventsInput,
  status?: Maybe<AppNodeStatus>,
  subtitle?: Maybe<Scalars['String']>,
  target: UserGroup,
  title: Scalars['String'],
};

export type EventCreateWithoutPlaceInput = {
  access?: Maybe<Scalars['String']>,
  accessPoint?: Maybe<Scalars['String']>,
  author: UserCreateOneWithoutEventsInput,
  body: Scalars['String'],
  date: Scalars['DateTime'],
  id?: Maybe<Scalars['ID']>,
  imageURL?: Maybe<Scalars['String']>,
  organizer?: Maybe<Scalars['String']>,
  status?: Maybe<AppNodeStatus>,
  subtitle?: Maybe<Scalars['String']>,
  target: UserGroup,
  title: Scalars['String'],
};

export type EventEdge = {
   __typename?: 'EventEdge',
  cursor: Scalars['String'],
  node: Event,
};

export enum EventOrderByInput {
  AccessAsc = 'access_ASC',
  AccessDesc = 'access_DESC',
  AccessPointAsc = 'accessPoint_ASC',
  AccessPointDesc = 'accessPoint_DESC',
  BodyAsc = 'body_ASC',
  BodyDesc = 'body_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ImageUrlAsc = 'imageURL_ASC',
  ImageUrlDesc = 'imageURL_DESC',
  OrganizerAsc = 'organizer_ASC',
  OrganizerDesc = 'organizer_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TargetAsc = 'target_ASC',
  TargetDesc = 'target_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type EventScalarWhereInput = {
  access?: Maybe<Scalars['String']>,
  access_contains?: Maybe<Scalars['String']>,
  access_ends_with?: Maybe<Scalars['String']>,
  access_gt?: Maybe<Scalars['String']>,
  access_gte?: Maybe<Scalars['String']>,
  access_in?: Maybe<Array<Scalars['String']>>,
  access_lt?: Maybe<Scalars['String']>,
  access_lte?: Maybe<Scalars['String']>,
  access_not?: Maybe<Scalars['String']>,
  access_not_contains?: Maybe<Scalars['String']>,
  access_not_ends_with?: Maybe<Scalars['String']>,
  access_not_in?: Maybe<Array<Scalars['String']>>,
  access_not_starts_with?: Maybe<Scalars['String']>,
  access_starts_with?: Maybe<Scalars['String']>,
  accessPoint?: Maybe<Scalars['String']>,
  accessPoint_contains?: Maybe<Scalars['String']>,
  accessPoint_ends_with?: Maybe<Scalars['String']>,
  accessPoint_gt?: Maybe<Scalars['String']>,
  accessPoint_gte?: Maybe<Scalars['String']>,
  accessPoint_in?: Maybe<Array<Scalars['String']>>,
  accessPoint_lt?: Maybe<Scalars['String']>,
  accessPoint_lte?: Maybe<Scalars['String']>,
  accessPoint_not?: Maybe<Scalars['String']>,
  accessPoint_not_contains?: Maybe<Scalars['String']>,
  accessPoint_not_ends_with?: Maybe<Scalars['String']>,
  accessPoint_not_in?: Maybe<Array<Scalars['String']>>,
  accessPoint_not_starts_with?: Maybe<Scalars['String']>,
  accessPoint_starts_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<EventScalarWhereInput>>,
  body?: Maybe<Scalars['String']>,
  body_contains?: Maybe<Scalars['String']>,
  body_ends_with?: Maybe<Scalars['String']>,
  body_gt?: Maybe<Scalars['String']>,
  body_gte?: Maybe<Scalars['String']>,
  body_in?: Maybe<Array<Scalars['String']>>,
  body_lt?: Maybe<Scalars['String']>,
  body_lte?: Maybe<Scalars['String']>,
  body_not?: Maybe<Scalars['String']>,
  body_not_contains?: Maybe<Scalars['String']>,
  body_not_ends_with?: Maybe<Scalars['String']>,
  body_not_in?: Maybe<Array<Scalars['String']>>,
  body_not_starts_with?: Maybe<Scalars['String']>,
  body_starts_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  date?: Maybe<Scalars['DateTime']>,
  date_gt?: Maybe<Scalars['DateTime']>,
  date_gte?: Maybe<Scalars['DateTime']>,
  date_in?: Maybe<Array<Scalars['DateTime']>>,
  date_lt?: Maybe<Scalars['DateTime']>,
  date_lte?: Maybe<Scalars['DateTime']>,
  date_not?: Maybe<Scalars['DateTime']>,
  date_not_in?: Maybe<Array<Scalars['DateTime']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  imageURL?: Maybe<Scalars['String']>,
  imageURL_contains?: Maybe<Scalars['String']>,
  imageURL_ends_with?: Maybe<Scalars['String']>,
  imageURL_gt?: Maybe<Scalars['String']>,
  imageURL_gte?: Maybe<Scalars['String']>,
  imageURL_in?: Maybe<Array<Scalars['String']>>,
  imageURL_lt?: Maybe<Scalars['String']>,
  imageURL_lte?: Maybe<Scalars['String']>,
  imageURL_not?: Maybe<Scalars['String']>,
  imageURL_not_contains?: Maybe<Scalars['String']>,
  imageURL_not_ends_with?: Maybe<Scalars['String']>,
  imageURL_not_in?: Maybe<Array<Scalars['String']>>,
  imageURL_not_starts_with?: Maybe<Scalars['String']>,
  imageURL_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<EventScalarWhereInput>>,
  OR?: Maybe<Array<EventScalarWhereInput>>,
  organizer?: Maybe<Scalars['String']>,
  organizer_contains?: Maybe<Scalars['String']>,
  organizer_ends_with?: Maybe<Scalars['String']>,
  organizer_gt?: Maybe<Scalars['String']>,
  organizer_gte?: Maybe<Scalars['String']>,
  organizer_in?: Maybe<Array<Scalars['String']>>,
  organizer_lt?: Maybe<Scalars['String']>,
  organizer_lte?: Maybe<Scalars['String']>,
  organizer_not?: Maybe<Scalars['String']>,
  organizer_not_contains?: Maybe<Scalars['String']>,
  organizer_not_ends_with?: Maybe<Scalars['String']>,
  organizer_not_in?: Maybe<Array<Scalars['String']>>,
  organizer_not_starts_with?: Maybe<Scalars['String']>,
  organizer_starts_with?: Maybe<Scalars['String']>,
  status?: Maybe<AppNodeStatus>,
  status_in?: Maybe<Array<AppNodeStatus>>,
  status_not?: Maybe<AppNodeStatus>,
  status_not_in?: Maybe<Array<AppNodeStatus>>,
  subtitle?: Maybe<Scalars['String']>,
  subtitle_contains?: Maybe<Scalars['String']>,
  subtitle_ends_with?: Maybe<Scalars['String']>,
  subtitle_gt?: Maybe<Scalars['String']>,
  subtitle_gte?: Maybe<Scalars['String']>,
  subtitle_in?: Maybe<Array<Scalars['String']>>,
  subtitle_lt?: Maybe<Scalars['String']>,
  subtitle_lte?: Maybe<Scalars['String']>,
  subtitle_not?: Maybe<Scalars['String']>,
  subtitle_not_contains?: Maybe<Scalars['String']>,
  subtitle_not_ends_with?: Maybe<Scalars['String']>,
  subtitle_not_in?: Maybe<Array<Scalars['String']>>,
  subtitle_not_starts_with?: Maybe<Scalars['String']>,
  subtitle_starts_with?: Maybe<Scalars['String']>,
  target?: Maybe<UserGroup>,
  target_in?: Maybe<Array<UserGroup>>,
  target_not?: Maybe<UserGroup>,
  target_not_in?: Maybe<Array<UserGroup>>,
  title?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_gt?: Maybe<Scalars['String']>,
  title_gte?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Scalars['String']>>,
  title_lt?: Maybe<Scalars['String']>,
  title_lte?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  title_not_in?: Maybe<Array<Scalars['String']>>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type EventUpdateInput = {
  access?: Maybe<Scalars['String']>,
  accessPoint?: Maybe<Scalars['String']>,
  author?: Maybe<UserUpdateOneRequiredWithoutEventsInput>,
  body?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['DateTime']>,
  imageURL?: Maybe<Scalars['String']>,
  organizer?: Maybe<Scalars['String']>,
  place?: Maybe<SpaceUpdateOneRequiredWithoutEventsInput>,
  status?: Maybe<AppNodeStatus>,
  subtitle?: Maybe<Scalars['String']>,
  target?: Maybe<UserGroup>,
  title?: Maybe<Scalars['String']>,
};

export type EventUpdateManyDataInput = {
  access?: Maybe<Scalars['String']>,
  accessPoint?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['DateTime']>,
  imageURL?: Maybe<Scalars['String']>,
  organizer?: Maybe<Scalars['String']>,
  status?: Maybe<AppNodeStatus>,
  subtitle?: Maybe<Scalars['String']>,
  target?: Maybe<UserGroup>,
  title?: Maybe<Scalars['String']>,
};

export type EventUpdateManyMutationInput = {
  access?: Maybe<Scalars['String']>,
  accessPoint?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['DateTime']>,
  imageURL?: Maybe<Scalars['String']>,
  organizer?: Maybe<Scalars['String']>,
  status?: Maybe<AppNodeStatus>,
  subtitle?: Maybe<Scalars['String']>,
  target?: Maybe<UserGroup>,
  title?: Maybe<Scalars['String']>,
};

export type EventUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<EventWhereUniqueInput>>,
  create?: Maybe<Array<EventCreateWithoutAuthorInput>>,
  delete?: Maybe<Array<EventWhereUniqueInput>>,
  deleteMany?: Maybe<Array<EventScalarWhereInput>>,
  disconnect?: Maybe<Array<EventWhereUniqueInput>>,
  set?: Maybe<Array<EventWhereUniqueInput>>,
  update?: Maybe<Array<EventUpdateWithWhereUniqueWithoutAuthorInput>>,
  updateMany?: Maybe<Array<EventUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<EventUpsertWithWhereUniqueWithoutAuthorInput>>,
};

export type EventUpdateManyWithoutPlaceInput = {
  connect?: Maybe<Array<EventWhereUniqueInput>>,
  create?: Maybe<Array<EventCreateWithoutPlaceInput>>,
  delete?: Maybe<Array<EventWhereUniqueInput>>,
  deleteMany?: Maybe<Array<EventScalarWhereInput>>,
  disconnect?: Maybe<Array<EventWhereUniqueInput>>,
  set?: Maybe<Array<EventWhereUniqueInput>>,
  update?: Maybe<Array<EventUpdateWithWhereUniqueWithoutPlaceInput>>,
  updateMany?: Maybe<Array<EventUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<EventUpsertWithWhereUniqueWithoutPlaceInput>>,
};

export type EventUpdateManyWithWhereNestedInput = {
  data: EventUpdateManyDataInput,
  where: EventScalarWhereInput,
};

export type EventUpdateWithoutAuthorDataInput = {
  access?: Maybe<Scalars['String']>,
  accessPoint?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['DateTime']>,
  imageURL?: Maybe<Scalars['String']>,
  organizer?: Maybe<Scalars['String']>,
  place?: Maybe<SpaceUpdateOneRequiredWithoutEventsInput>,
  status?: Maybe<AppNodeStatus>,
  subtitle?: Maybe<Scalars['String']>,
  target?: Maybe<UserGroup>,
  title?: Maybe<Scalars['String']>,
};

export type EventUpdateWithoutPlaceDataInput = {
  access?: Maybe<Scalars['String']>,
  accessPoint?: Maybe<Scalars['String']>,
  author?: Maybe<UserUpdateOneRequiredWithoutEventsInput>,
  body?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['DateTime']>,
  imageURL?: Maybe<Scalars['String']>,
  organizer?: Maybe<Scalars['String']>,
  status?: Maybe<AppNodeStatus>,
  subtitle?: Maybe<Scalars['String']>,
  target?: Maybe<UserGroup>,
  title?: Maybe<Scalars['String']>,
};

export type EventUpdateWithWhereUniqueWithoutAuthorInput = {
  data: EventUpdateWithoutAuthorDataInput,
  where: EventWhereUniqueInput,
};

export type EventUpdateWithWhereUniqueWithoutPlaceInput = {
  data: EventUpdateWithoutPlaceDataInput,
  where: EventWhereUniqueInput,
};

export type EventUpsertWithWhereUniqueWithoutAuthorInput = {
  create: EventCreateWithoutAuthorInput,
  update: EventUpdateWithoutAuthorDataInput,
  where: EventWhereUniqueInput,
};

export type EventUpsertWithWhereUniqueWithoutPlaceInput = {
  create: EventCreateWithoutPlaceInput,
  update: EventUpdateWithoutPlaceDataInput,
  where: EventWhereUniqueInput,
};

export type EventWhereInput = {
  access?: Maybe<Scalars['String']>,
  access_contains?: Maybe<Scalars['String']>,
  access_ends_with?: Maybe<Scalars['String']>,
  access_gt?: Maybe<Scalars['String']>,
  access_gte?: Maybe<Scalars['String']>,
  access_in?: Maybe<Array<Scalars['String']>>,
  access_lt?: Maybe<Scalars['String']>,
  access_lte?: Maybe<Scalars['String']>,
  access_not?: Maybe<Scalars['String']>,
  access_not_contains?: Maybe<Scalars['String']>,
  access_not_ends_with?: Maybe<Scalars['String']>,
  access_not_in?: Maybe<Array<Scalars['String']>>,
  access_not_starts_with?: Maybe<Scalars['String']>,
  access_starts_with?: Maybe<Scalars['String']>,
  accessPoint?: Maybe<Scalars['String']>,
  accessPoint_contains?: Maybe<Scalars['String']>,
  accessPoint_ends_with?: Maybe<Scalars['String']>,
  accessPoint_gt?: Maybe<Scalars['String']>,
  accessPoint_gte?: Maybe<Scalars['String']>,
  accessPoint_in?: Maybe<Array<Scalars['String']>>,
  accessPoint_lt?: Maybe<Scalars['String']>,
  accessPoint_lte?: Maybe<Scalars['String']>,
  accessPoint_not?: Maybe<Scalars['String']>,
  accessPoint_not_contains?: Maybe<Scalars['String']>,
  accessPoint_not_ends_with?: Maybe<Scalars['String']>,
  accessPoint_not_in?: Maybe<Array<Scalars['String']>>,
  accessPoint_not_starts_with?: Maybe<Scalars['String']>,
  accessPoint_starts_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<EventWhereInput>>,
  author?: Maybe<UserWhereInput>,
  body?: Maybe<Scalars['String']>,
  body_contains?: Maybe<Scalars['String']>,
  body_ends_with?: Maybe<Scalars['String']>,
  body_gt?: Maybe<Scalars['String']>,
  body_gte?: Maybe<Scalars['String']>,
  body_in?: Maybe<Array<Scalars['String']>>,
  body_lt?: Maybe<Scalars['String']>,
  body_lte?: Maybe<Scalars['String']>,
  body_not?: Maybe<Scalars['String']>,
  body_not_contains?: Maybe<Scalars['String']>,
  body_not_ends_with?: Maybe<Scalars['String']>,
  body_not_in?: Maybe<Array<Scalars['String']>>,
  body_not_starts_with?: Maybe<Scalars['String']>,
  body_starts_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  date?: Maybe<Scalars['DateTime']>,
  date_gt?: Maybe<Scalars['DateTime']>,
  date_gte?: Maybe<Scalars['DateTime']>,
  date_in?: Maybe<Array<Scalars['DateTime']>>,
  date_lt?: Maybe<Scalars['DateTime']>,
  date_lte?: Maybe<Scalars['DateTime']>,
  date_not?: Maybe<Scalars['DateTime']>,
  date_not_in?: Maybe<Array<Scalars['DateTime']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  imageURL?: Maybe<Scalars['String']>,
  imageURL_contains?: Maybe<Scalars['String']>,
  imageURL_ends_with?: Maybe<Scalars['String']>,
  imageURL_gt?: Maybe<Scalars['String']>,
  imageURL_gte?: Maybe<Scalars['String']>,
  imageURL_in?: Maybe<Array<Scalars['String']>>,
  imageURL_lt?: Maybe<Scalars['String']>,
  imageURL_lte?: Maybe<Scalars['String']>,
  imageURL_not?: Maybe<Scalars['String']>,
  imageURL_not_contains?: Maybe<Scalars['String']>,
  imageURL_not_ends_with?: Maybe<Scalars['String']>,
  imageURL_not_in?: Maybe<Array<Scalars['String']>>,
  imageURL_not_starts_with?: Maybe<Scalars['String']>,
  imageURL_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<EventWhereInput>>,
  OR?: Maybe<Array<EventWhereInput>>,
  organizer?: Maybe<Scalars['String']>,
  organizer_contains?: Maybe<Scalars['String']>,
  organizer_ends_with?: Maybe<Scalars['String']>,
  organizer_gt?: Maybe<Scalars['String']>,
  organizer_gte?: Maybe<Scalars['String']>,
  organizer_in?: Maybe<Array<Scalars['String']>>,
  organizer_lt?: Maybe<Scalars['String']>,
  organizer_lte?: Maybe<Scalars['String']>,
  organizer_not?: Maybe<Scalars['String']>,
  organizer_not_contains?: Maybe<Scalars['String']>,
  organizer_not_ends_with?: Maybe<Scalars['String']>,
  organizer_not_in?: Maybe<Array<Scalars['String']>>,
  organizer_not_starts_with?: Maybe<Scalars['String']>,
  organizer_starts_with?: Maybe<Scalars['String']>,
  place?: Maybe<SpaceWhereInput>,
  status?: Maybe<AppNodeStatus>,
  status_in?: Maybe<Array<AppNodeStatus>>,
  status_not?: Maybe<AppNodeStatus>,
  status_not_in?: Maybe<Array<AppNodeStatus>>,
  subtitle?: Maybe<Scalars['String']>,
  subtitle_contains?: Maybe<Scalars['String']>,
  subtitle_ends_with?: Maybe<Scalars['String']>,
  subtitle_gt?: Maybe<Scalars['String']>,
  subtitle_gte?: Maybe<Scalars['String']>,
  subtitle_in?: Maybe<Array<Scalars['String']>>,
  subtitle_lt?: Maybe<Scalars['String']>,
  subtitle_lte?: Maybe<Scalars['String']>,
  subtitle_not?: Maybe<Scalars['String']>,
  subtitle_not_contains?: Maybe<Scalars['String']>,
  subtitle_not_ends_with?: Maybe<Scalars['String']>,
  subtitle_not_in?: Maybe<Array<Scalars['String']>>,
  subtitle_not_starts_with?: Maybe<Scalars['String']>,
  subtitle_starts_with?: Maybe<Scalars['String']>,
  target?: Maybe<UserGroup>,
  target_in?: Maybe<Array<UserGroup>>,
  target_not?: Maybe<UserGroup>,
  target_not_in?: Maybe<Array<UserGroup>>,
  title?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_gt?: Maybe<Scalars['String']>,
  title_gte?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Scalars['String']>>,
  title_lt?: Maybe<Scalars['String']>,
  title_lte?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  title_not_in?: Maybe<Array<Scalars['String']>>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type EventWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Examen = {
   __typename?: 'Examen',
  convocatoria: ConvocatoriaExamen,
  createdAt: Scalars['DateTime'],
  dateTime: Scalars['DateTime'],
  endTime: Scalars['String'],
  espacio: Space,
  id: Scalars['ID'],
  leccion: Leccion,
  updatedAt: Scalars['DateTime'],
};

export type ExamenConnection = {
   __typename?: 'ExamenConnection',
  aggregate: AggregateExamen,
  edges: Array<ExamenEdge>,
  pageInfo: PageInfo,
};

export type ExamenCreateInput = {
  convocatoria: ConvocatoriaExamenCreateOneWithoutExamenesInput,
  dateTime: Scalars['DateTime'],
  endTime: Scalars['String'],
  espacio: SpaceCreateOneWithoutExamenesInput,
  id?: Maybe<Scalars['ID']>,
  leccion: LeccionCreateOneWithoutExamenesInput,
};

export type ExamenCreateManyWithoutConvocatoriaInput = {
  connect?: Maybe<Array<ExamenWhereUniqueInput>>,
  create?: Maybe<Array<ExamenCreateWithoutConvocatoriaInput>>,
};

export type ExamenCreateManyWithoutEspacioInput = {
  connect?: Maybe<Array<ExamenWhereUniqueInput>>,
  create?: Maybe<Array<ExamenCreateWithoutEspacioInput>>,
};

export type ExamenCreateManyWithoutLeccionInput = {
  connect?: Maybe<Array<ExamenWhereUniqueInput>>,
  create?: Maybe<Array<ExamenCreateWithoutLeccionInput>>,
};

export type ExamenCreateWithoutConvocatoriaInput = {
  dateTime: Scalars['DateTime'],
  endTime: Scalars['String'],
  espacio: SpaceCreateOneWithoutExamenesInput,
  id?: Maybe<Scalars['ID']>,
  leccion: LeccionCreateOneWithoutExamenesInput,
};

export type ExamenCreateWithoutEspacioInput = {
  convocatoria: ConvocatoriaExamenCreateOneWithoutExamenesInput,
  dateTime: Scalars['DateTime'],
  endTime: Scalars['String'],
  id?: Maybe<Scalars['ID']>,
  leccion: LeccionCreateOneWithoutExamenesInput,
};

export type ExamenCreateWithoutLeccionInput = {
  convocatoria: ConvocatoriaExamenCreateOneWithoutExamenesInput,
  dateTime: Scalars['DateTime'],
  endTime: Scalars['String'],
  espacio: SpaceCreateOneWithoutExamenesInput,
  id?: Maybe<Scalars['ID']>,
};

export type ExamenEdge = {
   __typename?: 'ExamenEdge',
  cursor: Scalars['String'],
  node: Examen,
};

export enum ExamenOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateTimeAsc = 'dateTime_ASC',
  DateTimeDesc = 'dateTime_DESC',
  EndTimeAsc = 'endTime_ASC',
  EndTimeDesc = 'endTime_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ExamenScalarWhereInput = {
  AND?: Maybe<Array<ExamenScalarWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  dateTime?: Maybe<Scalars['DateTime']>,
  dateTime_gt?: Maybe<Scalars['DateTime']>,
  dateTime_gte?: Maybe<Scalars['DateTime']>,
  dateTime_in?: Maybe<Array<Scalars['DateTime']>>,
  dateTime_lt?: Maybe<Scalars['DateTime']>,
  dateTime_lte?: Maybe<Scalars['DateTime']>,
  dateTime_not?: Maybe<Scalars['DateTime']>,
  dateTime_not_in?: Maybe<Array<Scalars['DateTime']>>,
  endTime?: Maybe<Scalars['String']>,
  endTime_contains?: Maybe<Scalars['String']>,
  endTime_ends_with?: Maybe<Scalars['String']>,
  endTime_gt?: Maybe<Scalars['String']>,
  endTime_gte?: Maybe<Scalars['String']>,
  endTime_in?: Maybe<Array<Scalars['String']>>,
  endTime_lt?: Maybe<Scalars['String']>,
  endTime_lte?: Maybe<Scalars['String']>,
  endTime_not?: Maybe<Scalars['String']>,
  endTime_not_contains?: Maybe<Scalars['String']>,
  endTime_not_ends_with?: Maybe<Scalars['String']>,
  endTime_not_in?: Maybe<Array<Scalars['String']>>,
  endTime_not_starts_with?: Maybe<Scalars['String']>,
  endTime_starts_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  NOT?: Maybe<Array<ExamenScalarWhereInput>>,
  OR?: Maybe<Array<ExamenScalarWhereInput>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type ExamenUpdateInput = {
  convocatoria?: Maybe<ConvocatoriaExamenUpdateOneRequiredWithoutExamenesInput>,
  dateTime?: Maybe<Scalars['DateTime']>,
  endTime?: Maybe<Scalars['String']>,
  espacio?: Maybe<SpaceUpdateOneRequiredWithoutExamenesInput>,
  leccion?: Maybe<LeccionUpdateOneRequiredWithoutExamenesInput>,
};

export type ExamenUpdateManyDataInput = {
  dateTime?: Maybe<Scalars['DateTime']>,
  endTime?: Maybe<Scalars['String']>,
};

export type ExamenUpdateManyMutationInput = {
  dateTime?: Maybe<Scalars['DateTime']>,
  endTime?: Maybe<Scalars['String']>,
};

export type ExamenUpdateManyWithoutConvocatoriaInput = {
  connect?: Maybe<Array<ExamenWhereUniqueInput>>,
  create?: Maybe<Array<ExamenCreateWithoutConvocatoriaInput>>,
  delete?: Maybe<Array<ExamenWhereUniqueInput>>,
  deleteMany?: Maybe<Array<ExamenScalarWhereInput>>,
  disconnect?: Maybe<Array<ExamenWhereUniqueInput>>,
  set?: Maybe<Array<ExamenWhereUniqueInput>>,
  update?: Maybe<Array<ExamenUpdateWithWhereUniqueWithoutConvocatoriaInput>>,
  updateMany?: Maybe<Array<ExamenUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<ExamenUpsertWithWhereUniqueWithoutConvocatoriaInput>>,
};

export type ExamenUpdateManyWithoutEspacioInput = {
  connect?: Maybe<Array<ExamenWhereUniqueInput>>,
  create?: Maybe<Array<ExamenCreateWithoutEspacioInput>>,
  delete?: Maybe<Array<ExamenWhereUniqueInput>>,
  deleteMany?: Maybe<Array<ExamenScalarWhereInput>>,
  disconnect?: Maybe<Array<ExamenWhereUniqueInput>>,
  set?: Maybe<Array<ExamenWhereUniqueInput>>,
  update?: Maybe<Array<ExamenUpdateWithWhereUniqueWithoutEspacioInput>>,
  updateMany?: Maybe<Array<ExamenUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<ExamenUpsertWithWhereUniqueWithoutEspacioInput>>,
};

export type ExamenUpdateManyWithoutLeccionInput = {
  connect?: Maybe<Array<ExamenWhereUniqueInput>>,
  create?: Maybe<Array<ExamenCreateWithoutLeccionInput>>,
  delete?: Maybe<Array<ExamenWhereUniqueInput>>,
  deleteMany?: Maybe<Array<ExamenScalarWhereInput>>,
  disconnect?: Maybe<Array<ExamenWhereUniqueInput>>,
  set?: Maybe<Array<ExamenWhereUniqueInput>>,
  update?: Maybe<Array<ExamenUpdateWithWhereUniqueWithoutLeccionInput>>,
  updateMany?: Maybe<Array<ExamenUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<ExamenUpsertWithWhereUniqueWithoutLeccionInput>>,
};

export type ExamenUpdateManyWithWhereNestedInput = {
  data: ExamenUpdateManyDataInput,
  where: ExamenScalarWhereInput,
};

export type ExamenUpdateWithoutConvocatoriaDataInput = {
  dateTime?: Maybe<Scalars['DateTime']>,
  endTime?: Maybe<Scalars['String']>,
  espacio?: Maybe<SpaceUpdateOneRequiredWithoutExamenesInput>,
  leccion?: Maybe<LeccionUpdateOneRequiredWithoutExamenesInput>,
};

export type ExamenUpdateWithoutEspacioDataInput = {
  convocatoria?: Maybe<ConvocatoriaExamenUpdateOneRequiredWithoutExamenesInput>,
  dateTime?: Maybe<Scalars['DateTime']>,
  endTime?: Maybe<Scalars['String']>,
  leccion?: Maybe<LeccionUpdateOneRequiredWithoutExamenesInput>,
};

export type ExamenUpdateWithoutLeccionDataInput = {
  convocatoria?: Maybe<ConvocatoriaExamenUpdateOneRequiredWithoutExamenesInput>,
  dateTime?: Maybe<Scalars['DateTime']>,
  endTime?: Maybe<Scalars['String']>,
  espacio?: Maybe<SpaceUpdateOneRequiredWithoutExamenesInput>,
};

export type ExamenUpdateWithWhereUniqueWithoutConvocatoriaInput = {
  data: ExamenUpdateWithoutConvocatoriaDataInput,
  where: ExamenWhereUniqueInput,
};

export type ExamenUpdateWithWhereUniqueWithoutEspacioInput = {
  data: ExamenUpdateWithoutEspacioDataInput,
  where: ExamenWhereUniqueInput,
};

export type ExamenUpdateWithWhereUniqueWithoutLeccionInput = {
  data: ExamenUpdateWithoutLeccionDataInput,
  where: ExamenWhereUniqueInput,
};

export type ExamenUpsertWithWhereUniqueWithoutConvocatoriaInput = {
  create: ExamenCreateWithoutConvocatoriaInput,
  update: ExamenUpdateWithoutConvocatoriaDataInput,
  where: ExamenWhereUniqueInput,
};

export type ExamenUpsertWithWhereUniqueWithoutEspacioInput = {
  create: ExamenCreateWithoutEspacioInput,
  update: ExamenUpdateWithoutEspacioDataInput,
  where: ExamenWhereUniqueInput,
};

export type ExamenUpsertWithWhereUniqueWithoutLeccionInput = {
  create: ExamenCreateWithoutLeccionInput,
  update: ExamenUpdateWithoutLeccionDataInput,
  where: ExamenWhereUniqueInput,
};

export type ExamenWhereInput = {
  AND?: Maybe<Array<ExamenWhereInput>>,
  convocatoria?: Maybe<ConvocatoriaExamenWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  dateTime?: Maybe<Scalars['DateTime']>,
  dateTime_gt?: Maybe<Scalars['DateTime']>,
  dateTime_gte?: Maybe<Scalars['DateTime']>,
  dateTime_in?: Maybe<Array<Scalars['DateTime']>>,
  dateTime_lt?: Maybe<Scalars['DateTime']>,
  dateTime_lte?: Maybe<Scalars['DateTime']>,
  dateTime_not?: Maybe<Scalars['DateTime']>,
  dateTime_not_in?: Maybe<Array<Scalars['DateTime']>>,
  endTime?: Maybe<Scalars['String']>,
  endTime_contains?: Maybe<Scalars['String']>,
  endTime_ends_with?: Maybe<Scalars['String']>,
  endTime_gt?: Maybe<Scalars['String']>,
  endTime_gte?: Maybe<Scalars['String']>,
  endTime_in?: Maybe<Array<Scalars['String']>>,
  endTime_lt?: Maybe<Scalars['String']>,
  endTime_lte?: Maybe<Scalars['String']>,
  endTime_not?: Maybe<Scalars['String']>,
  endTime_not_contains?: Maybe<Scalars['String']>,
  endTime_not_ends_with?: Maybe<Scalars['String']>,
  endTime_not_in?: Maybe<Array<Scalars['String']>>,
  endTime_not_starts_with?: Maybe<Scalars['String']>,
  endTime_starts_with?: Maybe<Scalars['String']>,
  espacio?: Maybe<SpaceWhereInput>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  leccion?: Maybe<LeccionWhereInput>,
  NOT?: Maybe<Array<ExamenWhereInput>>,
  OR?: Maybe<Array<ExamenWhereInput>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type ExamenWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Item = {
   __typename?: 'Item',
  createdAt: Scalars['DateTime'],
  discount?: Maybe<Discount>,
  id: Scalars['ID'],
  order: Order,
  orderPrice: Scalars['Float'],
  product: Product,
  quantity: Scalars['Int'],
  updatedAt: Scalars['DateTime'],
};

export type ItemConnection = {
   __typename?: 'ItemConnection',
  aggregate: AggregateItem,
  edges: Array<ItemEdge>,
  pageInfo: PageInfo,
};

export type ItemCreateInput = {
  discount?: Maybe<DiscountCreateOneInput>,
  id?: Maybe<Scalars['ID']>,
  order: OrderCreateOneWithoutItemsInput,
  orderPrice: Scalars['Float'],
  product: ProductCreateOneWithoutOrdersInput,
  quantity: Scalars['Int'],
};

export type ItemCreateManyWithoutOrderInput = {
  connect?: Maybe<Array<ItemWhereUniqueInput>>,
  create?: Maybe<Array<ItemCreateWithoutOrderInput>>,
};

export type ItemCreateManyWithoutProductInput = {
  connect?: Maybe<Array<ItemWhereUniqueInput>>,
  create?: Maybe<Array<ItemCreateWithoutProductInput>>,
};

export type ItemCreateWithoutOrderInput = {
  discount?: Maybe<DiscountCreateOneInput>,
  id?: Maybe<Scalars['ID']>,
  orderPrice: Scalars['Float'],
  product: ProductCreateOneWithoutOrdersInput,
  quantity: Scalars['Int'],
};

export type ItemCreateWithoutProductInput = {
  discount?: Maybe<DiscountCreateOneInput>,
  id?: Maybe<Scalars['ID']>,
  order: OrderCreateOneWithoutItemsInput,
  orderPrice: Scalars['Float'],
  quantity: Scalars['Int'],
};

export type ItemEdge = {
   __typename?: 'ItemEdge',
  cursor: Scalars['String'],
  node: Item,
};

export enum ItemOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  OrderPriceAsc = 'orderPrice_ASC',
  OrderPriceDesc = 'orderPrice_DESC',
  QuantityAsc = 'quantity_ASC',
  QuantityDesc = 'quantity_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ItemScalarWhereInput = {
  AND?: Maybe<Array<ItemScalarWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  NOT?: Maybe<Array<ItemScalarWhereInput>>,
  OR?: Maybe<Array<ItemScalarWhereInput>>,
  orderPrice?: Maybe<Scalars['Float']>,
  orderPrice_gt?: Maybe<Scalars['Float']>,
  orderPrice_gte?: Maybe<Scalars['Float']>,
  orderPrice_in?: Maybe<Array<Scalars['Float']>>,
  orderPrice_lt?: Maybe<Scalars['Float']>,
  orderPrice_lte?: Maybe<Scalars['Float']>,
  orderPrice_not?: Maybe<Scalars['Float']>,
  orderPrice_not_in?: Maybe<Array<Scalars['Float']>>,
  quantity?: Maybe<Scalars['Int']>,
  quantity_gt?: Maybe<Scalars['Int']>,
  quantity_gte?: Maybe<Scalars['Int']>,
  quantity_in?: Maybe<Array<Scalars['Int']>>,
  quantity_lt?: Maybe<Scalars['Int']>,
  quantity_lte?: Maybe<Scalars['Int']>,
  quantity_not?: Maybe<Scalars['Int']>,
  quantity_not_in?: Maybe<Array<Scalars['Int']>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type ItemUpdateInput = {
  discount?: Maybe<DiscountUpdateOneInput>,
  order?: Maybe<OrderUpdateOneRequiredWithoutItemsInput>,
  orderPrice?: Maybe<Scalars['Float']>,
  product?: Maybe<ProductUpdateOneRequiredWithoutOrdersInput>,
  quantity?: Maybe<Scalars['Int']>,
};

export type ItemUpdateManyDataInput = {
  orderPrice?: Maybe<Scalars['Float']>,
  quantity?: Maybe<Scalars['Int']>,
};

export type ItemUpdateManyMutationInput = {
  orderPrice?: Maybe<Scalars['Float']>,
  quantity?: Maybe<Scalars['Int']>,
};

export type ItemUpdateManyWithoutOrderInput = {
  connect?: Maybe<Array<ItemWhereUniqueInput>>,
  create?: Maybe<Array<ItemCreateWithoutOrderInput>>,
  delete?: Maybe<Array<ItemWhereUniqueInput>>,
  deleteMany?: Maybe<Array<ItemScalarWhereInput>>,
  disconnect?: Maybe<Array<ItemWhereUniqueInput>>,
  set?: Maybe<Array<ItemWhereUniqueInput>>,
  update?: Maybe<Array<ItemUpdateWithWhereUniqueWithoutOrderInput>>,
  updateMany?: Maybe<Array<ItemUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<ItemUpsertWithWhereUniqueWithoutOrderInput>>,
};

export type ItemUpdateManyWithoutProductInput = {
  connect?: Maybe<Array<ItemWhereUniqueInput>>,
  create?: Maybe<Array<ItemCreateWithoutProductInput>>,
  delete?: Maybe<Array<ItemWhereUniqueInput>>,
  deleteMany?: Maybe<Array<ItemScalarWhereInput>>,
  disconnect?: Maybe<Array<ItemWhereUniqueInput>>,
  set?: Maybe<Array<ItemWhereUniqueInput>>,
  update?: Maybe<Array<ItemUpdateWithWhereUniqueWithoutProductInput>>,
  updateMany?: Maybe<Array<ItemUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<ItemUpsertWithWhereUniqueWithoutProductInput>>,
};

export type ItemUpdateManyWithWhereNestedInput = {
  data: ItemUpdateManyDataInput,
  where: ItemScalarWhereInput,
};

export type ItemUpdateWithoutOrderDataInput = {
  discount?: Maybe<DiscountUpdateOneInput>,
  orderPrice?: Maybe<Scalars['Float']>,
  product?: Maybe<ProductUpdateOneRequiredWithoutOrdersInput>,
  quantity?: Maybe<Scalars['Int']>,
};

export type ItemUpdateWithoutProductDataInput = {
  discount?: Maybe<DiscountUpdateOneInput>,
  order?: Maybe<OrderUpdateOneRequiredWithoutItemsInput>,
  orderPrice?: Maybe<Scalars['Float']>,
  quantity?: Maybe<Scalars['Int']>,
};

export type ItemUpdateWithWhereUniqueWithoutOrderInput = {
  data: ItemUpdateWithoutOrderDataInput,
  where: ItemWhereUniqueInput,
};

export type ItemUpdateWithWhereUniqueWithoutProductInput = {
  data: ItemUpdateWithoutProductDataInput,
  where: ItemWhereUniqueInput,
};

export type ItemUpsertWithWhereUniqueWithoutOrderInput = {
  create: ItemCreateWithoutOrderInput,
  update: ItemUpdateWithoutOrderDataInput,
  where: ItemWhereUniqueInput,
};

export type ItemUpsertWithWhereUniqueWithoutProductInput = {
  create: ItemCreateWithoutProductInput,
  update: ItemUpdateWithoutProductDataInput,
  where: ItemWhereUniqueInput,
};

export type ItemWhereInput = {
  AND?: Maybe<Array<ItemWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  discount?: Maybe<DiscountWhereInput>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  NOT?: Maybe<Array<ItemWhereInput>>,
  OR?: Maybe<Array<ItemWhereInput>>,
  order?: Maybe<OrderWhereInput>,
  orderPrice?: Maybe<Scalars['Float']>,
  orderPrice_gt?: Maybe<Scalars['Float']>,
  orderPrice_gte?: Maybe<Scalars['Float']>,
  orderPrice_in?: Maybe<Array<Scalars['Float']>>,
  orderPrice_lt?: Maybe<Scalars['Float']>,
  orderPrice_lte?: Maybe<Scalars['Float']>,
  orderPrice_not?: Maybe<Scalars['Float']>,
  orderPrice_not_in?: Maybe<Array<Scalars['Float']>>,
  product?: Maybe<ProductWhereInput>,
  quantity?: Maybe<Scalars['Int']>,
  quantity_gt?: Maybe<Scalars['Int']>,
  quantity_gte?: Maybe<Scalars['Int']>,
  quantity_in?: Maybe<Array<Scalars['Int']>>,
  quantity_lt?: Maybe<Scalars['Int']>,
  quantity_lte?: Maybe<Scalars['Int']>,
  quantity_not?: Maybe<Scalars['Int']>,
  quantity_not_in?: Maybe<Array<Scalars['Int']>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type ItemWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};


export type Leccion = {
   __typename?: 'Leccion',
  createdAt: Scalars['DateTime'],
  desdobles?: Maybe<Array<Desdoble>>,
  examenes?: Maybe<Array<Examen>>,
  gestor: User,
  id: Scalars['ID'],
  name: Scalars['String'],
  periodo: PeriodoOperativo,
  profesoresDisponibles?: Maybe<Array<User>>,
  recurrencias?: Maybe<Array<Recurrencia>>,
  sesiones?: Maybe<Array<Sesion>>,
  updatedAt: Scalars['DateTime'],
};


export type LeccionDesdoblesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<DesdobleOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<DesdobleWhereInput>
};


export type LeccionExamenesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ExamenOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ExamenWhereInput>
};


export type LeccionProfesoresDisponiblesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<UserWhereInput>
};


export type LeccionRecurrenciasArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<RecurrenciaOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<RecurrenciaWhereInput>
};


export type LeccionSesionesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<SesionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<SesionWhereInput>
};

export type LeccionConnection = {
   __typename?: 'LeccionConnection',
  aggregate: AggregateLeccion,
  edges: Array<LeccionEdge>,
  pageInfo: PageInfo,
};

export type LeccionCreateInput = {
  desdobles?: Maybe<DesdobleCreateManyWithoutLeccionesInput>,
  examenes?: Maybe<ExamenCreateManyWithoutLeccionInput>,
  gestor: UserCreateOneWithoutLeccionesGestionadasInput,
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  periodo: PeriodoOperativoCreateOneWithoutLeccionesInput,
  profesoresDisponibles?: Maybe<UserCreateManyWithoutLeccionesDisponiblesInput>,
  recurrencias?: Maybe<RecurrenciaCreateManyWithoutLeccionInput>,
  sesiones?: Maybe<SesionCreateManyWithoutLeccionInput>,
};

export type LeccionCreateManyWithoutGestorInput = {
  connect?: Maybe<Array<LeccionWhereUniqueInput>>,
  create?: Maybe<Array<LeccionCreateWithoutGestorInput>>,
};

export type LeccionCreateManyWithoutPeriodoInput = {
  connect?: Maybe<Array<LeccionWhereUniqueInput>>,
  create?: Maybe<Array<LeccionCreateWithoutPeriodoInput>>,
};

export type LeccionCreateManyWithoutProfesoresDisponiblesInput = {
  connect?: Maybe<Array<LeccionWhereUniqueInput>>,
  create?: Maybe<Array<LeccionCreateWithoutProfesoresDisponiblesInput>>,
};

export type LeccionCreateOneInput = {
  connect?: Maybe<LeccionWhereUniqueInput>,
  create?: Maybe<LeccionCreateInput>,
};

export type LeccionCreateOneWithoutDesdoblesInput = {
  connect?: Maybe<LeccionWhereUniqueInput>,
  create?: Maybe<LeccionCreateWithoutDesdoblesInput>,
};

export type LeccionCreateOneWithoutExamenesInput = {
  connect?: Maybe<LeccionWhereUniqueInput>,
  create?: Maybe<LeccionCreateWithoutExamenesInput>,
};

export type LeccionCreateOneWithoutRecurrenciasInput = {
  connect?: Maybe<LeccionWhereUniqueInput>,
  create?: Maybe<LeccionCreateWithoutRecurrenciasInput>,
};

export type LeccionCreateOneWithoutSesionesInput = {
  connect?: Maybe<LeccionWhereUniqueInput>,
  create?: Maybe<LeccionCreateWithoutSesionesInput>,
};

export type LeccionCreateWithoutDesdoblesInput = {
  examenes?: Maybe<ExamenCreateManyWithoutLeccionInput>,
  gestor: UserCreateOneWithoutLeccionesGestionadasInput,
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  periodo: PeriodoOperativoCreateOneWithoutLeccionesInput,
  profesoresDisponibles?: Maybe<UserCreateManyWithoutLeccionesDisponiblesInput>,
  recurrencias?: Maybe<RecurrenciaCreateManyWithoutLeccionInput>,
  sesiones?: Maybe<SesionCreateManyWithoutLeccionInput>,
};

export type LeccionCreateWithoutExamenesInput = {
  desdobles?: Maybe<DesdobleCreateManyWithoutLeccionesInput>,
  gestor: UserCreateOneWithoutLeccionesGestionadasInput,
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  periodo: PeriodoOperativoCreateOneWithoutLeccionesInput,
  profesoresDisponibles?: Maybe<UserCreateManyWithoutLeccionesDisponiblesInput>,
  recurrencias?: Maybe<RecurrenciaCreateManyWithoutLeccionInput>,
  sesiones?: Maybe<SesionCreateManyWithoutLeccionInput>,
};

export type LeccionCreateWithoutGestorInput = {
  desdobles?: Maybe<DesdobleCreateManyWithoutLeccionesInput>,
  examenes?: Maybe<ExamenCreateManyWithoutLeccionInput>,
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  periodo: PeriodoOperativoCreateOneWithoutLeccionesInput,
  profesoresDisponibles?: Maybe<UserCreateManyWithoutLeccionesDisponiblesInput>,
  recurrencias?: Maybe<RecurrenciaCreateManyWithoutLeccionInput>,
  sesiones?: Maybe<SesionCreateManyWithoutLeccionInput>,
};

export type LeccionCreateWithoutPeriodoInput = {
  desdobles?: Maybe<DesdobleCreateManyWithoutLeccionesInput>,
  examenes?: Maybe<ExamenCreateManyWithoutLeccionInput>,
  gestor: UserCreateOneWithoutLeccionesGestionadasInput,
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  profesoresDisponibles?: Maybe<UserCreateManyWithoutLeccionesDisponiblesInput>,
  recurrencias?: Maybe<RecurrenciaCreateManyWithoutLeccionInput>,
  sesiones?: Maybe<SesionCreateManyWithoutLeccionInput>,
};

export type LeccionCreateWithoutProfesoresDisponiblesInput = {
  desdobles?: Maybe<DesdobleCreateManyWithoutLeccionesInput>,
  examenes?: Maybe<ExamenCreateManyWithoutLeccionInput>,
  gestor: UserCreateOneWithoutLeccionesGestionadasInput,
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  periodo: PeriodoOperativoCreateOneWithoutLeccionesInput,
  recurrencias?: Maybe<RecurrenciaCreateManyWithoutLeccionInput>,
  sesiones?: Maybe<SesionCreateManyWithoutLeccionInput>,
};

export type LeccionCreateWithoutRecurrenciasInput = {
  desdobles?: Maybe<DesdobleCreateManyWithoutLeccionesInput>,
  examenes?: Maybe<ExamenCreateManyWithoutLeccionInput>,
  gestor: UserCreateOneWithoutLeccionesGestionadasInput,
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  periodo: PeriodoOperativoCreateOneWithoutLeccionesInput,
  profesoresDisponibles?: Maybe<UserCreateManyWithoutLeccionesDisponiblesInput>,
  sesiones?: Maybe<SesionCreateManyWithoutLeccionInput>,
};

export type LeccionCreateWithoutSesionesInput = {
  desdobles?: Maybe<DesdobleCreateManyWithoutLeccionesInput>,
  examenes?: Maybe<ExamenCreateManyWithoutLeccionInput>,
  gestor: UserCreateOneWithoutLeccionesGestionadasInput,
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  periodo: PeriodoOperativoCreateOneWithoutLeccionesInput,
  profesoresDisponibles?: Maybe<UserCreateManyWithoutLeccionesDisponiblesInput>,
  recurrencias?: Maybe<RecurrenciaCreateManyWithoutLeccionInput>,
};

export type LeccionEdge = {
   __typename?: 'LeccionEdge',
  cursor: Scalars['String'],
  node: Leccion,
};

export type LeccionEspaciosPlanificados = {
   __typename?: 'LeccionEspaciosPlanificados',
  espacio: Space,
  recurrencia: Recurrencia,
};

export type LeccionEspaciosPlanificadosConnection = {
   __typename?: 'LeccionEspaciosPlanificadosConnection',
  aggregate: AggregateLeccionEspaciosPlanificados,
  edges: Array<LeccionEspaciosPlanificadosEdge>,
  pageInfo: PageInfo,
};

export type LeccionEspaciosPlanificadosCreateInput = {
  espacio: SpaceCreateOneInput,
  recurrencia: RecurrenciaCreateOneInput,
};

export type LeccionEspaciosPlanificadosEdge = {
   __typename?: 'LeccionEspaciosPlanificadosEdge',
  cursor: Scalars['String'],
  node: LeccionEspaciosPlanificados,
};

export enum LeccionEspaciosPlanificadosOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type LeccionEspaciosPlanificadosWhereInput = {
  AND?: Maybe<Array<LeccionEspaciosPlanificadosWhereInput>>,
  espacio?: Maybe<SpaceWhereInput>,
  NOT?: Maybe<Array<LeccionEspaciosPlanificadosWhereInput>>,
  OR?: Maybe<Array<LeccionEspaciosPlanificadosWhereInput>>,
  recurrencia?: Maybe<RecurrenciaWhereInput>,
};

export enum LeccionOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type LeccionScalarWhereInput = {
  AND?: Maybe<Array<LeccionScalarWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<LeccionScalarWhereInput>>,
  OR?: Maybe<Array<LeccionScalarWhereInput>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type LeccionSesiones = {
   __typename?: 'LeccionSesiones',
  leccion: Leccion,
  sesion: Sesion,
};

export type LeccionSesionesConnection = {
   __typename?: 'LeccionSesionesConnection',
  aggregate: AggregateLeccionSesiones,
  edges: Array<LeccionSesionesEdge>,
  pageInfo: PageInfo,
};

export type LeccionSesionesCreateInput = {
  leccion: LeccionCreateOneInput,
  sesion: SesionCreateOneInput,
};

export type LeccionSesionesEdge = {
   __typename?: 'LeccionSesionesEdge',
  cursor: Scalars['String'],
  node: LeccionSesiones,
};

export enum LeccionSesionesOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type LeccionSesionesWhereInput = {
  AND?: Maybe<Array<LeccionSesionesWhereInput>>,
  leccion?: Maybe<LeccionWhereInput>,
  NOT?: Maybe<Array<LeccionSesionesWhereInput>>,
  OR?: Maybe<Array<LeccionSesionesWhereInput>>,
  sesion?: Maybe<SesionWhereInput>,
};

export type LeccionUpdateInput = {
  desdobles?: Maybe<DesdobleUpdateManyWithoutLeccionesInput>,
  examenes?: Maybe<ExamenUpdateManyWithoutLeccionInput>,
  gestor?: Maybe<UserUpdateOneRequiredWithoutLeccionesGestionadasInput>,
  name?: Maybe<Scalars['String']>,
  periodo?: Maybe<PeriodoOperativoUpdateOneRequiredWithoutLeccionesInput>,
  profesoresDisponibles?: Maybe<UserUpdateManyWithoutLeccionesDisponiblesInput>,
  recurrencias?: Maybe<RecurrenciaUpdateManyWithoutLeccionInput>,
  sesiones?: Maybe<SesionUpdateManyWithoutLeccionInput>,
};

export type LeccionUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>,
};

export type LeccionUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
};

export type LeccionUpdateManyWithoutGestorInput = {
  connect?: Maybe<Array<LeccionWhereUniqueInput>>,
  create?: Maybe<Array<LeccionCreateWithoutGestorInput>>,
  delete?: Maybe<Array<LeccionWhereUniqueInput>>,
  deleteMany?: Maybe<Array<LeccionScalarWhereInput>>,
  disconnect?: Maybe<Array<LeccionWhereUniqueInput>>,
  set?: Maybe<Array<LeccionWhereUniqueInput>>,
  update?: Maybe<Array<LeccionUpdateWithWhereUniqueWithoutGestorInput>>,
  updateMany?: Maybe<Array<LeccionUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<LeccionUpsertWithWhereUniqueWithoutGestorInput>>,
};

export type LeccionUpdateManyWithoutPeriodoInput = {
  connect?: Maybe<Array<LeccionWhereUniqueInput>>,
  create?: Maybe<Array<LeccionCreateWithoutPeriodoInput>>,
  delete?: Maybe<Array<LeccionWhereUniqueInput>>,
  deleteMany?: Maybe<Array<LeccionScalarWhereInput>>,
  disconnect?: Maybe<Array<LeccionWhereUniqueInput>>,
  set?: Maybe<Array<LeccionWhereUniqueInput>>,
  update?: Maybe<Array<LeccionUpdateWithWhereUniqueWithoutPeriodoInput>>,
  updateMany?: Maybe<Array<LeccionUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<LeccionUpsertWithWhereUniqueWithoutPeriodoInput>>,
};

export type LeccionUpdateManyWithoutProfesoresDisponiblesInput = {
  connect?: Maybe<Array<LeccionWhereUniqueInput>>,
  create?: Maybe<Array<LeccionCreateWithoutProfesoresDisponiblesInput>>,
  delete?: Maybe<Array<LeccionWhereUniqueInput>>,
  deleteMany?: Maybe<Array<LeccionScalarWhereInput>>,
  disconnect?: Maybe<Array<LeccionWhereUniqueInput>>,
  set?: Maybe<Array<LeccionWhereUniqueInput>>,
  update?: Maybe<Array<LeccionUpdateWithWhereUniqueWithoutProfesoresDisponiblesInput>>,
  updateMany?: Maybe<Array<LeccionUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<LeccionUpsertWithWhereUniqueWithoutProfesoresDisponiblesInput>>,
};

export type LeccionUpdateManyWithWhereNestedInput = {
  data: LeccionUpdateManyDataInput,
  where: LeccionScalarWhereInput,
};

export type LeccionUpdateOneRequiredWithoutExamenesInput = {
  connect?: Maybe<LeccionWhereUniqueInput>,
  create?: Maybe<LeccionCreateWithoutExamenesInput>,
  update?: Maybe<LeccionUpdateWithoutExamenesDataInput>,
  upsert?: Maybe<LeccionUpsertWithoutExamenesInput>,
};

export type LeccionUpdateOneRequiredWithoutRecurrenciasInput = {
  connect?: Maybe<LeccionWhereUniqueInput>,
  create?: Maybe<LeccionCreateWithoutRecurrenciasInput>,
  update?: Maybe<LeccionUpdateWithoutRecurrenciasDataInput>,
  upsert?: Maybe<LeccionUpsertWithoutRecurrenciasInput>,
};

export type LeccionUpdateOneRequiredWithoutSesionesInput = {
  connect?: Maybe<LeccionWhereUniqueInput>,
  create?: Maybe<LeccionCreateWithoutSesionesInput>,
  update?: Maybe<LeccionUpdateWithoutSesionesDataInput>,
  upsert?: Maybe<LeccionUpsertWithoutSesionesInput>,
};

export type LeccionUpdateOneWithoutDesdoblesInput = {
  connect?: Maybe<LeccionWhereUniqueInput>,
  create?: Maybe<LeccionCreateWithoutDesdoblesInput>,
  delete?: Maybe<Scalars['Boolean']>,
  disconnect?: Maybe<Scalars['Boolean']>,
  update?: Maybe<LeccionUpdateWithoutDesdoblesDataInput>,
  upsert?: Maybe<LeccionUpsertWithoutDesdoblesInput>,
};

export type LeccionUpdateWithoutDesdoblesDataInput = {
  examenes?: Maybe<ExamenUpdateManyWithoutLeccionInput>,
  gestor?: Maybe<UserUpdateOneRequiredWithoutLeccionesGestionadasInput>,
  name?: Maybe<Scalars['String']>,
  periodo?: Maybe<PeriodoOperativoUpdateOneRequiredWithoutLeccionesInput>,
  profesoresDisponibles?: Maybe<UserUpdateManyWithoutLeccionesDisponiblesInput>,
  recurrencias?: Maybe<RecurrenciaUpdateManyWithoutLeccionInput>,
  sesiones?: Maybe<SesionUpdateManyWithoutLeccionInput>,
};

export type LeccionUpdateWithoutExamenesDataInput = {
  desdobles?: Maybe<DesdobleUpdateManyWithoutLeccionesInput>,
  gestor?: Maybe<UserUpdateOneRequiredWithoutLeccionesGestionadasInput>,
  name?: Maybe<Scalars['String']>,
  periodo?: Maybe<PeriodoOperativoUpdateOneRequiredWithoutLeccionesInput>,
  profesoresDisponibles?: Maybe<UserUpdateManyWithoutLeccionesDisponiblesInput>,
  recurrencias?: Maybe<RecurrenciaUpdateManyWithoutLeccionInput>,
  sesiones?: Maybe<SesionUpdateManyWithoutLeccionInput>,
};

export type LeccionUpdateWithoutGestorDataInput = {
  desdobles?: Maybe<DesdobleUpdateManyWithoutLeccionesInput>,
  examenes?: Maybe<ExamenUpdateManyWithoutLeccionInput>,
  name?: Maybe<Scalars['String']>,
  periodo?: Maybe<PeriodoOperativoUpdateOneRequiredWithoutLeccionesInput>,
  profesoresDisponibles?: Maybe<UserUpdateManyWithoutLeccionesDisponiblesInput>,
  recurrencias?: Maybe<RecurrenciaUpdateManyWithoutLeccionInput>,
  sesiones?: Maybe<SesionUpdateManyWithoutLeccionInput>,
};

export type LeccionUpdateWithoutPeriodoDataInput = {
  desdobles?: Maybe<DesdobleUpdateManyWithoutLeccionesInput>,
  examenes?: Maybe<ExamenUpdateManyWithoutLeccionInput>,
  gestor?: Maybe<UserUpdateOneRequiredWithoutLeccionesGestionadasInput>,
  name?: Maybe<Scalars['String']>,
  profesoresDisponibles?: Maybe<UserUpdateManyWithoutLeccionesDisponiblesInput>,
  recurrencias?: Maybe<RecurrenciaUpdateManyWithoutLeccionInput>,
  sesiones?: Maybe<SesionUpdateManyWithoutLeccionInput>,
};

export type LeccionUpdateWithoutProfesoresDisponiblesDataInput = {
  desdobles?: Maybe<DesdobleUpdateManyWithoutLeccionesInput>,
  examenes?: Maybe<ExamenUpdateManyWithoutLeccionInput>,
  gestor?: Maybe<UserUpdateOneRequiredWithoutLeccionesGestionadasInput>,
  name?: Maybe<Scalars['String']>,
  periodo?: Maybe<PeriodoOperativoUpdateOneRequiredWithoutLeccionesInput>,
  recurrencias?: Maybe<RecurrenciaUpdateManyWithoutLeccionInput>,
  sesiones?: Maybe<SesionUpdateManyWithoutLeccionInput>,
};

export type LeccionUpdateWithoutRecurrenciasDataInput = {
  desdobles?: Maybe<DesdobleUpdateManyWithoutLeccionesInput>,
  examenes?: Maybe<ExamenUpdateManyWithoutLeccionInput>,
  gestor?: Maybe<UserUpdateOneRequiredWithoutLeccionesGestionadasInput>,
  name?: Maybe<Scalars['String']>,
  periodo?: Maybe<PeriodoOperativoUpdateOneRequiredWithoutLeccionesInput>,
  profesoresDisponibles?: Maybe<UserUpdateManyWithoutLeccionesDisponiblesInput>,
  sesiones?: Maybe<SesionUpdateManyWithoutLeccionInput>,
};

export type LeccionUpdateWithoutSesionesDataInput = {
  desdobles?: Maybe<DesdobleUpdateManyWithoutLeccionesInput>,
  examenes?: Maybe<ExamenUpdateManyWithoutLeccionInput>,
  gestor?: Maybe<UserUpdateOneRequiredWithoutLeccionesGestionadasInput>,
  name?: Maybe<Scalars['String']>,
  periodo?: Maybe<PeriodoOperativoUpdateOneRequiredWithoutLeccionesInput>,
  profesoresDisponibles?: Maybe<UserUpdateManyWithoutLeccionesDisponiblesInput>,
  recurrencias?: Maybe<RecurrenciaUpdateManyWithoutLeccionInput>,
};

export type LeccionUpdateWithWhereUniqueWithoutGestorInput = {
  data: LeccionUpdateWithoutGestorDataInput,
  where: LeccionWhereUniqueInput,
};

export type LeccionUpdateWithWhereUniqueWithoutPeriodoInput = {
  data: LeccionUpdateWithoutPeriodoDataInput,
  where: LeccionWhereUniqueInput,
};

export type LeccionUpdateWithWhereUniqueWithoutProfesoresDisponiblesInput = {
  data: LeccionUpdateWithoutProfesoresDisponiblesDataInput,
  where: LeccionWhereUniqueInput,
};

export type LeccionUpsertWithoutDesdoblesInput = {
  create: LeccionCreateWithoutDesdoblesInput,
  update: LeccionUpdateWithoutDesdoblesDataInput,
};

export type LeccionUpsertWithoutExamenesInput = {
  create: LeccionCreateWithoutExamenesInput,
  update: LeccionUpdateWithoutExamenesDataInput,
};

export type LeccionUpsertWithoutRecurrenciasInput = {
  create: LeccionCreateWithoutRecurrenciasInput,
  update: LeccionUpdateWithoutRecurrenciasDataInput,
};

export type LeccionUpsertWithoutSesionesInput = {
  create: LeccionCreateWithoutSesionesInput,
  update: LeccionUpdateWithoutSesionesDataInput,
};

export type LeccionUpsertWithWhereUniqueWithoutGestorInput = {
  create: LeccionCreateWithoutGestorInput,
  update: LeccionUpdateWithoutGestorDataInput,
  where: LeccionWhereUniqueInput,
};

export type LeccionUpsertWithWhereUniqueWithoutPeriodoInput = {
  create: LeccionCreateWithoutPeriodoInput,
  update: LeccionUpdateWithoutPeriodoDataInput,
  where: LeccionWhereUniqueInput,
};

export type LeccionUpsertWithWhereUniqueWithoutProfesoresDisponiblesInput = {
  create: LeccionCreateWithoutProfesoresDisponiblesInput,
  update: LeccionUpdateWithoutProfesoresDisponiblesDataInput,
  where: LeccionWhereUniqueInput,
};

export type LeccionWhereInput = {
  AND?: Maybe<Array<LeccionWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  desdobles_every?: Maybe<DesdobleWhereInput>,
  desdobles_none?: Maybe<DesdobleWhereInput>,
  desdobles_some?: Maybe<DesdobleWhereInput>,
  examenes_every?: Maybe<ExamenWhereInput>,
  examenes_none?: Maybe<ExamenWhereInput>,
  examenes_some?: Maybe<ExamenWhereInput>,
  gestor?: Maybe<UserWhereInput>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<LeccionWhereInput>>,
  OR?: Maybe<Array<LeccionWhereInput>>,
  periodo?: Maybe<PeriodoOperativoWhereInput>,
  profesoresDisponibles_every?: Maybe<UserWhereInput>,
  profesoresDisponibles_none?: Maybe<UserWhereInput>,
  profesoresDisponibles_some?: Maybe<UserWhereInput>,
  recurrencias_every?: Maybe<RecurrenciaWhereInput>,
  recurrencias_none?: Maybe<RecurrenciaWhereInput>,
  recurrencias_some?: Maybe<RecurrenciaWhereInput>,
  sesiones_every?: Maybe<SesionWhereInput>,
  sesiones_none?: Maybe<SesionWhereInput>,
  sesiones_some?: Maybe<SesionWhereInput>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type LeccionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};


export type Matricula = {
   __typename?: 'Matricula',
  alumno: User,
  createdAt: Scalars['DateTime'],
  desdoble: Desdoble,
  id: Scalars['ID'],
  updatedAt: Scalars['DateTime'],
};

export type MatriculaConnection = {
   __typename?: 'MatriculaConnection',
  aggregate: AggregateMatricula,
  edges: Array<MatriculaEdge>,
  pageInfo: PageInfo,
};

export type MatriculaCreateInput = {
  alumno: UserCreateOneWithoutMatriculasInput,
  desdoble: DesdobleCreateOneWithoutMatriculasInput,
  id?: Maybe<Scalars['ID']>,
};

export type MatriculaCreateManyWithoutAlumnoInput = {
  connect?: Maybe<Array<MatriculaWhereUniqueInput>>,
  create?: Maybe<Array<MatriculaCreateWithoutAlumnoInput>>,
};

export type MatriculaCreateManyWithoutDesdobleInput = {
  connect?: Maybe<Array<MatriculaWhereUniqueInput>>,
  create?: Maybe<Array<MatriculaCreateWithoutDesdobleInput>>,
};

export type MatriculaCreateWithoutAlumnoInput = {
  desdoble: DesdobleCreateOneWithoutMatriculasInput,
  id?: Maybe<Scalars['ID']>,
};

export type MatriculaCreateWithoutDesdobleInput = {
  alumno: UserCreateOneWithoutMatriculasInput,
  id?: Maybe<Scalars['ID']>,
};

export type MatriculaEdge = {
   __typename?: 'MatriculaEdge',
  cursor: Scalars['String'],
  node: Matricula,
};

export enum MatriculaOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type MatriculaScalarWhereInput = {
  AND?: Maybe<Array<MatriculaScalarWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  NOT?: Maybe<Array<MatriculaScalarWhereInput>>,
  OR?: Maybe<Array<MatriculaScalarWhereInput>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type MatriculaUpdateInput = {
  alumno?: Maybe<UserUpdateOneRequiredWithoutMatriculasInput>,
  desdoble?: Maybe<DesdobleUpdateOneRequiredWithoutMatriculasInput>,
};

export type MatriculaUpdateManyWithoutAlumnoInput = {
  connect?: Maybe<Array<MatriculaWhereUniqueInput>>,
  create?: Maybe<Array<MatriculaCreateWithoutAlumnoInput>>,
  delete?: Maybe<Array<MatriculaWhereUniqueInput>>,
  deleteMany?: Maybe<Array<MatriculaScalarWhereInput>>,
  disconnect?: Maybe<Array<MatriculaWhereUniqueInput>>,
  set?: Maybe<Array<MatriculaWhereUniqueInput>>,
  update?: Maybe<Array<MatriculaUpdateWithWhereUniqueWithoutAlumnoInput>>,
  upsert?: Maybe<Array<MatriculaUpsertWithWhereUniqueWithoutAlumnoInput>>,
};

export type MatriculaUpdateManyWithoutDesdobleInput = {
  connect?: Maybe<Array<MatriculaWhereUniqueInput>>,
  create?: Maybe<Array<MatriculaCreateWithoutDesdobleInput>>,
  delete?: Maybe<Array<MatriculaWhereUniqueInput>>,
  deleteMany?: Maybe<Array<MatriculaScalarWhereInput>>,
  disconnect?: Maybe<Array<MatriculaWhereUniqueInput>>,
  set?: Maybe<Array<MatriculaWhereUniqueInput>>,
  update?: Maybe<Array<MatriculaUpdateWithWhereUniqueWithoutDesdobleInput>>,
  upsert?: Maybe<Array<MatriculaUpsertWithWhereUniqueWithoutDesdobleInput>>,
};

export type MatriculaUpdateWithoutAlumnoDataInput = {
  desdoble?: Maybe<DesdobleUpdateOneRequiredWithoutMatriculasInput>,
};

export type MatriculaUpdateWithoutDesdobleDataInput = {
  alumno?: Maybe<UserUpdateOneRequiredWithoutMatriculasInput>,
};

export type MatriculaUpdateWithWhereUniqueWithoutAlumnoInput = {
  data: MatriculaUpdateWithoutAlumnoDataInput,
  where: MatriculaWhereUniqueInput,
};

export type MatriculaUpdateWithWhereUniqueWithoutDesdobleInput = {
  data: MatriculaUpdateWithoutDesdobleDataInput,
  where: MatriculaWhereUniqueInput,
};

export type MatriculaUpsertWithWhereUniqueWithoutAlumnoInput = {
  create: MatriculaCreateWithoutAlumnoInput,
  update: MatriculaUpdateWithoutAlumnoDataInput,
  where: MatriculaWhereUniqueInput,
};

export type MatriculaUpsertWithWhereUniqueWithoutDesdobleInput = {
  create: MatriculaCreateWithoutDesdobleInput,
  update: MatriculaUpdateWithoutDesdobleDataInput,
  where: MatriculaWhereUniqueInput,
};

export type MatriculaWhereInput = {
  alumno?: Maybe<UserWhereInput>,
  AND?: Maybe<Array<MatriculaWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  desdoble?: Maybe<DesdobleWhereInput>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  NOT?: Maybe<Array<MatriculaWhereInput>>,
  OR?: Maybe<Array<MatriculaWhereInput>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type MatriculaWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Mencion = {
   __typename?: 'Mencion',
  createdAt: Scalars['DateTime'],
  desdobles?: Maybe<Array<Desdoble>>,
  id: Scalars['ID'],
  name: Scalars['String'],
  shortName: Scalars['String'],
  updatedAt: Scalars['DateTime'],
};


export type MencionDesdoblesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<DesdobleOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<DesdobleWhereInput>
};

export type MencionConnection = {
   __typename?: 'MencionConnection',
  aggregate: AggregateMencion,
  edges: Array<MencionEdge>,
  pageInfo: PageInfo,
};

export type MencionCreateInput = {
  desdobles?: Maybe<DesdobleCreateManyWithoutMencionInput>,
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  shortName: Scalars['String'],
};

export type MencionCreateOneWithoutDesdoblesInput = {
  connect?: Maybe<MencionWhereUniqueInput>,
  create?: Maybe<MencionCreateWithoutDesdoblesInput>,
};

export type MencionCreateWithoutDesdoblesInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  shortName: Scalars['String'],
};

export type MencionEdge = {
   __typename?: 'MencionEdge',
  cursor: Scalars['String'],
  node: Mencion,
};

export enum MencionOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ShortNameAsc = 'shortName_ASC',
  ShortNameDesc = 'shortName_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type MencionUpdateInput = {
  desdobles?: Maybe<DesdobleUpdateManyWithoutMencionInput>,
  name?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
};

export type MencionUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
};

export type MencionUpdateOneRequiredWithoutDesdoblesInput = {
  connect?: Maybe<MencionWhereUniqueInput>,
  create?: Maybe<MencionCreateWithoutDesdoblesInput>,
  update?: Maybe<MencionUpdateWithoutDesdoblesDataInput>,
  upsert?: Maybe<MencionUpsertWithoutDesdoblesInput>,
};

export type MencionUpdateWithoutDesdoblesDataInput = {
  name?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
};

export type MencionUpsertWithoutDesdoblesInput = {
  create: MencionCreateWithoutDesdoblesInput,
  update: MencionUpdateWithoutDesdoblesDataInput,
};

export type MencionWhereInput = {
  AND?: Maybe<Array<MencionWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  desdobles_every?: Maybe<DesdobleWhereInput>,
  desdobles_none?: Maybe<DesdobleWhereInput>,
  desdobles_some?: Maybe<DesdobleWhereInput>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<MencionWhereInput>>,
  OR?: Maybe<Array<MencionWhereInput>>,
  shortName?: Maybe<Scalars['String']>,
  shortName_contains?: Maybe<Scalars['String']>,
  shortName_ends_with?: Maybe<Scalars['String']>,
  shortName_gt?: Maybe<Scalars['String']>,
  shortName_gte?: Maybe<Scalars['String']>,
  shortName_in?: Maybe<Array<Scalars['String']>>,
  shortName_lt?: Maybe<Scalars['String']>,
  shortName_lte?: Maybe<Scalars['String']>,
  shortName_not?: Maybe<Scalars['String']>,
  shortName_not_contains?: Maybe<Scalars['String']>,
  shortName_not_ends_with?: Maybe<Scalars['String']>,
  shortName_not_in?: Maybe<Array<Scalars['String']>>,
  shortName_not_starts_with?: Maybe<Scalars['String']>,
  shortName_starts_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type MencionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  approveGroupRequest: AuthPayload,
  changePassword: AuthPayload,
  createAddress: Address,
  createAsignatura: Asignatura,
  createAsistencia: Asistencia,
  createConvocatoriaExamen: ConvocatoriaExamen,
  createCurso: Curso,
  createDepartment: Department,
  createDesdoble: Desdoble,
  createDevice: Device,
  createDiscount: Discount,
  createDiscountRequest: DiscountRequest,
  createEstudio: Estudio,
  createEvent: Event,
  createExamen: Examen,
  createGroupRequest: AuthPayload,
  createItem: Item,
  createLeccion: Leccion,
  createLeccionEspaciosPlanificados: LeccionEspaciosPlanificados,
  createLeccionSesiones: LeccionSesiones,
  createMatricula: Matricula,
  createMencion: Mencion,
  createNews: News,
  createOfficialDocument: OfficialDocument,
  createOrder: Order,
  createPeriodoOperativo: PeriodoOperativo,
  createProduct: Product,
  createProductCategory: ProductCategory,
  createProfesoresLecciones: ProfesoresLecciones,
  createRatio: Ratio,
  createRecurrencia: Recurrencia,
  createRole: Role,
  createSesion: Sesion,
  createSocialLink: SocialLink,
  createSocialNetwork: SocialNetwork,
  createSpace: Space,
  createTitulacion: Titulacion,
  createTransaction: Transaction,
  createUser: User,
  createUserRoles: UserRoles,
  createVenue: Venue,
  deleteAddress?: Maybe<Address>,
  deleteAsignatura?: Maybe<Asignatura>,
  deleteAsistencia?: Maybe<Asistencia>,
  deleteConvocatoriaExamen?: Maybe<ConvocatoriaExamen>,
  deleteCurso?: Maybe<Curso>,
  deleteDepartment?: Maybe<Department>,
  deleteDesdoble?: Maybe<Desdoble>,
  deleteDevice?: Maybe<Device>,
  deleteDiscount?: Maybe<Discount>,
  deleteDiscountRequest?: Maybe<DiscountRequest>,
  deleteEstudio?: Maybe<Estudio>,
  deleteEvent?: Maybe<Event>,
  deleteExamen?: Maybe<Examen>,
  deleteItem?: Maybe<Item>,
  deleteLeccion?: Maybe<Leccion>,
  deleteManyAddresses: BatchPayload,
  deleteManyAsignaturas: BatchPayload,
  deleteManyAsistencias: BatchPayload,
  deleteManyConvocatoriaExamens: BatchPayload,
  deleteManyCursoes: BatchPayload,
  deleteManyDepartments: BatchPayload,
  deleteManyDesdobles: BatchPayload,
  deleteManyDevices: BatchPayload,
  deleteManyDiscountRequests: BatchPayload,
  deleteManyDiscounts: BatchPayload,
  deleteManyEstudios: BatchPayload,
  deleteManyEvents: BatchPayload,
  deleteManyExamens: BatchPayload,
  deleteManyItems: BatchPayload,
  deleteManyLeccionEspaciosPlanificadoses: BatchPayload,
  deleteManyLeccions: BatchPayload,
  deleteManyLeccionSesioneses: BatchPayload,
  deleteManyMatriculas: BatchPayload,
  deleteManyMencions: BatchPayload,
  deleteManyNewses: BatchPayload,
  deleteManyOfficialDocuments: BatchPayload,
  deleteManyOrders: BatchPayload,
  deleteManyPeriodoOperativoes: BatchPayload,
  deleteManyProductCategories: BatchPayload,
  deleteManyProducts: BatchPayload,
  deleteManyProfesoresLeccioneses: BatchPayload,
  deleteManyRatios: BatchPayload,
  deleteManyRecurrencias: BatchPayload,
  deleteManyRoles: BatchPayload,
  deleteManySesions: BatchPayload,
  deleteManySocialLinks: BatchPayload,
  deleteManySocialNetworks: BatchPayload,
  deleteManySpaces: BatchPayload,
  deleteManyTitulacions: BatchPayload,
  deleteManyTransactions: BatchPayload,
  deleteManyUserRoleses: BatchPayload,
  deleteManyUsers: BatchPayload,
  deleteManyVenues: BatchPayload,
  deleteMatricula?: Maybe<Matricula>,
  deleteMencion?: Maybe<Mencion>,
  deleteNews?: Maybe<News>,
  deleteOfficialDocument?: Maybe<OfficialDocument>,
  deleteOrder?: Maybe<Order>,
  deletePeriodoOperativo?: Maybe<PeriodoOperativo>,
  deleteProduct?: Maybe<Product>,
  deleteProductCategory?: Maybe<ProductCategory>,
  deleteRatio?: Maybe<Ratio>,
  deleteRecurrencia?: Maybe<Recurrencia>,
  deleteRole?: Maybe<Role>,
  deleteSesion?: Maybe<Sesion>,
  deleteSocialLink?: Maybe<SocialLink>,
  deleteSocialNetwork?: Maybe<SocialNetwork>,
  deleteSpace?: Maybe<Space>,
  deleteTitulacion?: Maybe<Titulacion>,
  deleteTransaction?: Maybe<Transaction>,
  deleteUser?: Maybe<User>,
  deleteVenue?: Maybe<Venue>,
  login: AuthPayload,
  publishNews?: Maybe<News>,
  rejectGroupRequest: AuthPayload,
  requestResetPassword: AuthPayload,
  signUpUser: AuthPayload,
  updateAddress?: Maybe<Address>,
  updateAsignatura?: Maybe<Asignatura>,
  updateAsistencia?: Maybe<Asistencia>,
  updateConvocatoriaExamen?: Maybe<ConvocatoriaExamen>,
  updateCurso?: Maybe<Curso>,
  updateDepartment?: Maybe<Department>,
  updateDesdoble?: Maybe<Desdoble>,
  updateDevice?: Maybe<Device>,
  updateDiscount?: Maybe<Discount>,
  updateDiscountRequest?: Maybe<DiscountRequest>,
  updateEstudio?: Maybe<Estudio>,
  updateEvent?: Maybe<Event>,
  updateExamen?: Maybe<Examen>,
  updateItem?: Maybe<Item>,
  updateLeccion?: Maybe<Leccion>,
  updateManyAddresses: BatchPayload,
  updateManyAsignaturas: BatchPayload,
  updateManyAsistencias: BatchPayload,
  updateManyConvocatoriaExamens: BatchPayload,
  updateManyCursoes: BatchPayload,
  updateManyDepartments: BatchPayload,
  updateManyDevices: BatchPayload,
  updateManyDiscountRequests: BatchPayload,
  updateManyDiscounts: BatchPayload,
  updateManyEstudios: BatchPayload,
  updateManyEvents: BatchPayload,
  updateManyExamens: BatchPayload,
  updateManyItems: BatchPayload,
  updateManyLeccions: BatchPayload,
  updateManyMencions: BatchPayload,
  updateManyNewses: BatchPayload,
  updateManyOfficialDocuments: BatchPayload,
  updateManyOrders: BatchPayload,
  updateManyPeriodoOperativoes: BatchPayload,
  updateManyProductCategories: BatchPayload,
  updateManyProducts: BatchPayload,
  updateManyRatios: BatchPayload,
  updateManyRecurrencias: BatchPayload,
  updateManyRoles: BatchPayload,
  updateManySesions: BatchPayload,
  updateManySocialLinks: BatchPayload,
  updateManySocialNetworks: BatchPayload,
  updateManySpaces: BatchPayload,
  updateManyTitulacions: BatchPayload,
  updateManyTransactions: BatchPayload,
  updateManyUsers: BatchPayload,
  updateManyVenues: BatchPayload,
  updateMatricula?: Maybe<Matricula>,
  updateMencion?: Maybe<Mencion>,
  updateNews?: Maybe<News>,
  updateOfficialDocument?: Maybe<OfficialDocument>,
  updateOrder?: Maybe<Order>,
  updatePeriodoOperativo?: Maybe<PeriodoOperativo>,
  updateProduct?: Maybe<Product>,
  updateProductCategory?: Maybe<ProductCategory>,
  updateRatio?: Maybe<Ratio>,
  updateRecurrencia?: Maybe<Recurrencia>,
  updateRole?: Maybe<Role>,
  updateSesion?: Maybe<Sesion>,
  updateSocialLink?: Maybe<SocialLink>,
  updateSocialNetwork?: Maybe<SocialNetwork>,
  updateSpace?: Maybe<Space>,
  updateTitulacion?: Maybe<Titulacion>,
  updateTransaction?: Maybe<Transaction>,
  updateUser?: Maybe<User>,
  updateVenue?: Maybe<Venue>,
  upsertAddress: Address,
  upsertAsignatura: Asignatura,
  upsertAsistencia: Asistencia,
  upsertConvocatoriaExamen: ConvocatoriaExamen,
  upsertCurso: Curso,
  upsertDepartment: Department,
  upsertDesdoble: Desdoble,
  upsertDevice: Device,
  upsertDiscount: Discount,
  upsertDiscountRequest: DiscountRequest,
  upsertEstudio: Estudio,
  upsertEvent: Event,
  upsertExamen: Examen,
  upsertItem: Item,
  upsertLeccion: Leccion,
  upsertMatricula: Matricula,
  upsertMencion: Mencion,
  upsertNews: News,
  upsertOfficialDocument: OfficialDocument,
  upsertOrder: Order,
  upsertPeriodoOperativo: PeriodoOperativo,
  upsertProduct: Product,
  upsertProductCategory: ProductCategory,
  upsertRatio: Ratio,
  upsertRecurrencia: Recurrencia,
  upsertRole: Role,
  upsertSesion: Sesion,
  upsertSocialLink: SocialLink,
  upsertSocialNetwork: SocialNetwork,
  upsertSpace: Space,
  upsertTitulacion: Titulacion,
  upsertTransaction: Transaction,
  upsertUser: User,
  upsertVenue: Venue,
};


export type MutationApproveGroupRequestArgs = {
  email: Scalars['String']
};


export type MutationChangePasswordArgs = {
  key: Scalars['String'],
  newPassword: Scalars['String']
};


export type MutationCreateAddressArgs = {
  data: AddressCreateInput
};


export type MutationCreateAsignaturaArgs = {
  data: AsignaturaCreateInput
};


export type MutationCreateAsistenciaArgs = {
  data: AsistenciaCreateInput
};


export type MutationCreateConvocatoriaExamenArgs = {
  data: ConvocatoriaExamenCreateInput
};


export type MutationCreateCursoArgs = {
  data: CursoCreateInput
};


export type MutationCreateDepartmentArgs = {
  data: DepartmentCreateInput
};


export type MutationCreateDesdobleArgs = {
  data: DesdobleCreateInput
};


export type MutationCreateDeviceArgs = {
  data: DeviceCreateInput
};


export type MutationCreateDiscountArgs = {
  data: DiscountCreateInput
};


export type MutationCreateDiscountRequestArgs = {
  data: DiscountRequestCreateInput
};


export type MutationCreateEstudioArgs = {
  data: EstudioCreateInput
};


export type MutationCreateEventArgs = {
  data: EventCreateInput
};


export type MutationCreateExamenArgs = {
  data: ExamenCreateInput
};


export type MutationCreateGroupRequestArgs = {
  groupRequest: UserGroup
};


export type MutationCreateItemArgs = {
  data: ItemCreateInput
};


export type MutationCreateLeccionArgs = {
  data: LeccionCreateInput
};


export type MutationCreateLeccionEspaciosPlanificadosArgs = {
  data: LeccionEspaciosPlanificadosCreateInput
};


export type MutationCreateLeccionSesionesArgs = {
  data: LeccionSesionesCreateInput
};


export type MutationCreateMatriculaArgs = {
  data: MatriculaCreateInput
};


export type MutationCreateMencionArgs = {
  data: MencionCreateInput
};


export type MutationCreateNewsArgs = {
  body: Scalars['String'],
  target: Scalars['String'],
  title: Scalars['String']
};


export type MutationCreateOfficialDocumentArgs = {
  data: OfficialDocumentCreateInput
};


export type MutationCreateOrderArgs = {
  data: OrderCreateInput
};


export type MutationCreatePeriodoOperativoArgs = {
  data: PeriodoOperativoCreateInput
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput
};


export type MutationCreateProductCategoryArgs = {
  data: ProductCategoryCreateInput
};


export type MutationCreateProfesoresLeccionesArgs = {
  data: ProfesoresLeccionesCreateInput
};


export type MutationCreateRatioArgs = {
  data: RatioCreateInput
};


export type MutationCreateRecurrenciaArgs = {
  data: RecurrenciaCreateInput
};


export type MutationCreateRoleArgs = {
  data: RoleCreateInput
};


export type MutationCreateSesionArgs = {
  data: SesionCreateInput
};


export type MutationCreateSocialLinkArgs = {
  data: SocialLinkCreateInput
};


export type MutationCreateSocialNetworkArgs = {
  data: SocialNetworkCreateInput
};


export type MutationCreateSpaceArgs = {
  data: SpaceCreateInput
};


export type MutationCreateTitulacionArgs = {
  data: TitulacionCreateInput
};


export type MutationCreateTransactionArgs = {
  data: TransactionCreateInput
};


export type MutationCreateUserArgs = {
  data: UserCreateInput
};


export type MutationCreateUserRolesArgs = {
  data: UserRolesCreateInput
};


export type MutationCreateVenueArgs = {
  data: VenueCreateInput
};


export type MutationDeleteAddressArgs = {
  where: AddressWhereUniqueInput
};


export type MutationDeleteAsignaturaArgs = {
  where: AsignaturaWhereUniqueInput
};


export type MutationDeleteAsistenciaArgs = {
  where: AsistenciaWhereUniqueInput
};


export type MutationDeleteConvocatoriaExamenArgs = {
  where: ConvocatoriaExamenWhereUniqueInput
};


export type MutationDeleteCursoArgs = {
  where: CursoWhereUniqueInput
};


export type MutationDeleteDepartmentArgs = {
  where: DepartmentWhereUniqueInput
};


export type MutationDeleteDesdobleArgs = {
  where: DesdobleWhereUniqueInput
};


export type MutationDeleteDeviceArgs = {
  where: DeviceWhereUniqueInput
};


export type MutationDeleteDiscountArgs = {
  where: DiscountWhereUniqueInput
};


export type MutationDeleteDiscountRequestArgs = {
  where: DiscountRequestWhereUniqueInput
};


export type MutationDeleteEstudioArgs = {
  where: EstudioWhereUniqueInput
};


export type MutationDeleteEventArgs = {
  where: EventWhereUniqueInput
};


export type MutationDeleteExamenArgs = {
  where: ExamenWhereUniqueInput
};


export type MutationDeleteItemArgs = {
  where: ItemWhereUniqueInput
};


export type MutationDeleteLeccionArgs = {
  where: LeccionWhereUniqueInput
};


export type MutationDeleteManyAddressesArgs = {
  where?: Maybe<AddressWhereInput>
};


export type MutationDeleteManyAsignaturasArgs = {
  where?: Maybe<AsignaturaWhereInput>
};


export type MutationDeleteManyAsistenciasArgs = {
  where?: Maybe<AsistenciaWhereInput>
};


export type MutationDeleteManyConvocatoriaExamensArgs = {
  where?: Maybe<ConvocatoriaExamenWhereInput>
};


export type MutationDeleteManyCursoesArgs = {
  where?: Maybe<CursoWhereInput>
};


export type MutationDeleteManyDepartmentsArgs = {
  where?: Maybe<DepartmentWhereInput>
};


export type MutationDeleteManyDesdoblesArgs = {
  where?: Maybe<DesdobleWhereInput>
};


export type MutationDeleteManyDevicesArgs = {
  where?: Maybe<DeviceWhereInput>
};


export type MutationDeleteManyDiscountRequestsArgs = {
  where?: Maybe<DiscountRequestWhereInput>
};


export type MutationDeleteManyDiscountsArgs = {
  where?: Maybe<DiscountWhereInput>
};


export type MutationDeleteManyEstudiosArgs = {
  where?: Maybe<EstudioWhereInput>
};


export type MutationDeleteManyEventsArgs = {
  where?: Maybe<EventWhereInput>
};


export type MutationDeleteManyExamensArgs = {
  where?: Maybe<ExamenWhereInput>
};


export type MutationDeleteManyItemsArgs = {
  where?: Maybe<ItemWhereInput>
};


export type MutationDeleteManyLeccionEspaciosPlanificadosesArgs = {
  where?: Maybe<LeccionEspaciosPlanificadosWhereInput>
};


export type MutationDeleteManyLeccionsArgs = {
  where?: Maybe<LeccionWhereInput>
};


export type MutationDeleteManyLeccionSesionesesArgs = {
  where?: Maybe<LeccionSesionesWhereInput>
};


export type MutationDeleteManyMatriculasArgs = {
  where?: Maybe<MatriculaWhereInput>
};


export type MutationDeleteManyMencionsArgs = {
  where?: Maybe<MencionWhereInput>
};


export type MutationDeleteManyNewsesArgs = {
  where?: Maybe<NewsWhereInput>
};


export type MutationDeleteManyOfficialDocumentsArgs = {
  where?: Maybe<OfficialDocumentWhereInput>
};


export type MutationDeleteManyOrdersArgs = {
  where?: Maybe<OrderWhereInput>
};


export type MutationDeleteManyPeriodoOperativoesArgs = {
  where?: Maybe<PeriodoOperativoWhereInput>
};


export type MutationDeleteManyProductCategoriesArgs = {
  where?: Maybe<ProductCategoryWhereInput>
};


export type MutationDeleteManyProductsArgs = {
  where?: Maybe<ProductWhereInput>
};


export type MutationDeleteManyProfesoresLeccionesesArgs = {
  where?: Maybe<ProfesoresLeccionesWhereInput>
};


export type MutationDeleteManyRatiosArgs = {
  where?: Maybe<RatioWhereInput>
};


export type MutationDeleteManyRecurrenciasArgs = {
  where?: Maybe<RecurrenciaWhereInput>
};


export type MutationDeleteManyRolesArgs = {
  where?: Maybe<RoleWhereInput>
};


export type MutationDeleteManySesionsArgs = {
  where?: Maybe<SesionWhereInput>
};


export type MutationDeleteManySocialLinksArgs = {
  where?: Maybe<SocialLinkWhereInput>
};


export type MutationDeleteManySocialNetworksArgs = {
  where?: Maybe<SocialNetworkWhereInput>
};


export type MutationDeleteManySpacesArgs = {
  where?: Maybe<SpaceWhereInput>
};


export type MutationDeleteManyTitulacionsArgs = {
  where?: Maybe<TitulacionWhereInput>
};


export type MutationDeleteManyTransactionsArgs = {
  where?: Maybe<TransactionWhereInput>
};


export type MutationDeleteManyUserRolesesArgs = {
  where?: Maybe<UserRolesWhereInput>
};


export type MutationDeleteManyUsersArgs = {
  where?: Maybe<UserWhereInput>
};


export type MutationDeleteManyVenuesArgs = {
  where?: Maybe<VenueWhereInput>
};


export type MutationDeleteMatriculaArgs = {
  where: MatriculaWhereUniqueInput
};


export type MutationDeleteMencionArgs = {
  where: MencionWhereUniqueInput
};


export type MutationDeleteNewsArgs = {
  id: Scalars['ID']
};


export type MutationDeleteOfficialDocumentArgs = {
  where: OfficialDocumentWhereUniqueInput
};


export type MutationDeleteOrderArgs = {
  where: OrderWhereUniqueInput
};


export type MutationDeletePeriodoOperativoArgs = {
  where: PeriodoOperativoWhereUniqueInput
};


export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput
};


export type MutationDeleteProductCategoryArgs = {
  where: ProductCategoryWhereUniqueInput
};


export type MutationDeleteRatioArgs = {
  where: RatioWhereUniqueInput
};


export type MutationDeleteRecurrenciaArgs = {
  where: RecurrenciaWhereUniqueInput
};


export type MutationDeleteRoleArgs = {
  where: RoleWhereUniqueInput
};


export type MutationDeleteSesionArgs = {
  where: SesionWhereUniqueInput
};


export type MutationDeleteSocialLinkArgs = {
  where: SocialLinkWhereUniqueInput
};


export type MutationDeleteSocialNetworkArgs = {
  where: SocialNetworkWhereUniqueInput
};


export type MutationDeleteSpaceArgs = {
  where: SpaceWhereUniqueInput
};


export type MutationDeleteTitulacionArgs = {
  where: TitulacionWhereUniqueInput
};


export type MutationDeleteTransactionArgs = {
  where: TransactionWhereUniqueInput
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput
};


export type MutationDeleteVenueArgs = {
  where: VenueWhereUniqueInput
};


export type MutationLoginArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationPublishNewsArgs = {
  id: Scalars['ID']
};


export type MutationRejectGroupRequestArgs = {
  email: Scalars['String']
};


export type MutationRequestResetPasswordArgs = {
  email: Scalars['String']
};


export type MutationSignUpUserArgs = {
  email: Scalars['String'],
  firstname: Scalars['String'],
  groupRequest?: Maybe<UserGroup>,
  lastname: Scalars['String'],
  password: Scalars['String']
};


export type MutationUpdateAddressArgs = {
  data: AddressUpdateInput,
  where: AddressWhereUniqueInput
};


export type MutationUpdateAsignaturaArgs = {
  data: AsignaturaUpdateInput,
  where: AsignaturaWhereUniqueInput
};


export type MutationUpdateAsistenciaArgs = {
  data: AsistenciaUpdateInput,
  where: AsistenciaWhereUniqueInput
};


export type MutationUpdateConvocatoriaExamenArgs = {
  data: ConvocatoriaExamenUpdateInput,
  where: ConvocatoriaExamenWhereUniqueInput
};


export type MutationUpdateCursoArgs = {
  data: CursoUpdateInput,
  where: CursoWhereUniqueInput
};


export type MutationUpdateDepartmentArgs = {
  data: DepartmentUpdateInput,
  where: DepartmentWhereUniqueInput
};


export type MutationUpdateDesdobleArgs = {
  data: DesdobleUpdateInput,
  where: DesdobleWhereUniqueInput
};


export type MutationUpdateDeviceArgs = {
  data: DeviceUpdateInput,
  where: DeviceWhereUniqueInput
};


export type MutationUpdateDiscountArgs = {
  data: DiscountUpdateInput,
  where: DiscountWhereUniqueInput
};


export type MutationUpdateDiscountRequestArgs = {
  data: DiscountRequestUpdateInput,
  where: DiscountRequestWhereUniqueInput
};


export type MutationUpdateEstudioArgs = {
  data: EstudioUpdateInput,
  where: EstudioWhereUniqueInput
};


export type MutationUpdateEventArgs = {
  data: EventUpdateInput,
  where: EventWhereUniqueInput
};


export type MutationUpdateExamenArgs = {
  data: ExamenUpdateInput,
  where: ExamenWhereUniqueInput
};


export type MutationUpdateItemArgs = {
  data: ItemUpdateInput,
  where: ItemWhereUniqueInput
};


export type MutationUpdateLeccionArgs = {
  data: LeccionUpdateInput,
  where: LeccionWhereUniqueInput
};


export type MutationUpdateManyAddressesArgs = {
  data: AddressUpdateManyMutationInput,
  where?: Maybe<AddressWhereInput>
};


export type MutationUpdateManyAsignaturasArgs = {
  data: AsignaturaUpdateManyMutationInput,
  where?: Maybe<AsignaturaWhereInput>
};


export type MutationUpdateManyAsistenciasArgs = {
  data: AsistenciaUpdateManyMutationInput,
  where?: Maybe<AsistenciaWhereInput>
};


export type MutationUpdateManyConvocatoriaExamensArgs = {
  data: ConvocatoriaExamenUpdateManyMutationInput,
  where?: Maybe<ConvocatoriaExamenWhereInput>
};


export type MutationUpdateManyCursoesArgs = {
  data: CursoUpdateManyMutationInput,
  where?: Maybe<CursoWhereInput>
};


export type MutationUpdateManyDepartmentsArgs = {
  data: DepartmentUpdateManyMutationInput,
  where?: Maybe<DepartmentWhereInput>
};


export type MutationUpdateManyDevicesArgs = {
  data: DeviceUpdateManyMutationInput,
  where?: Maybe<DeviceWhereInput>
};


export type MutationUpdateManyDiscountRequestsArgs = {
  data: DiscountRequestUpdateManyMutationInput,
  where?: Maybe<DiscountRequestWhereInput>
};


export type MutationUpdateManyDiscountsArgs = {
  data: DiscountUpdateManyMutationInput,
  where?: Maybe<DiscountWhereInput>
};


export type MutationUpdateManyEstudiosArgs = {
  data: EstudioUpdateManyMutationInput,
  where?: Maybe<EstudioWhereInput>
};


export type MutationUpdateManyEventsArgs = {
  data: EventUpdateManyMutationInput,
  where?: Maybe<EventWhereInput>
};


export type MutationUpdateManyExamensArgs = {
  data: ExamenUpdateManyMutationInput,
  where?: Maybe<ExamenWhereInput>
};


export type MutationUpdateManyItemsArgs = {
  data: ItemUpdateManyMutationInput,
  where?: Maybe<ItemWhereInput>
};


export type MutationUpdateManyLeccionsArgs = {
  data: LeccionUpdateManyMutationInput,
  where?: Maybe<LeccionWhereInput>
};


export type MutationUpdateManyMencionsArgs = {
  data: MencionUpdateManyMutationInput,
  where?: Maybe<MencionWhereInput>
};


export type MutationUpdateManyNewsesArgs = {
  data: NewsUpdateManyMutationInput,
  where?: Maybe<NewsWhereInput>
};


export type MutationUpdateManyOfficialDocumentsArgs = {
  data: OfficialDocumentUpdateManyMutationInput,
  where?: Maybe<OfficialDocumentWhereInput>
};


export type MutationUpdateManyOrdersArgs = {
  data: OrderUpdateManyMutationInput,
  where?: Maybe<OrderWhereInput>
};


export type MutationUpdateManyPeriodoOperativoesArgs = {
  data: PeriodoOperativoUpdateManyMutationInput,
  where?: Maybe<PeriodoOperativoWhereInput>
};


export type MutationUpdateManyProductCategoriesArgs = {
  data: ProductCategoryUpdateManyMutationInput,
  where?: Maybe<ProductCategoryWhereInput>
};


export type MutationUpdateManyProductsArgs = {
  data: ProductUpdateManyMutationInput,
  where?: Maybe<ProductWhereInput>
};


export type MutationUpdateManyRatiosArgs = {
  data: RatioUpdateManyMutationInput,
  where?: Maybe<RatioWhereInput>
};


export type MutationUpdateManyRecurrenciasArgs = {
  data: RecurrenciaUpdateManyMutationInput,
  where?: Maybe<RecurrenciaWhereInput>
};


export type MutationUpdateManyRolesArgs = {
  data: RoleUpdateManyMutationInput,
  where?: Maybe<RoleWhereInput>
};


export type MutationUpdateManySesionsArgs = {
  data: SesionUpdateManyMutationInput,
  where?: Maybe<SesionWhereInput>
};


export type MutationUpdateManySocialLinksArgs = {
  data: SocialLinkUpdateManyMutationInput,
  where?: Maybe<SocialLinkWhereInput>
};


export type MutationUpdateManySocialNetworksArgs = {
  data: SocialNetworkUpdateManyMutationInput,
  where?: Maybe<SocialNetworkWhereInput>
};


export type MutationUpdateManySpacesArgs = {
  data: SpaceUpdateManyMutationInput,
  where?: Maybe<SpaceWhereInput>
};


export type MutationUpdateManyTitulacionsArgs = {
  data: TitulacionUpdateManyMutationInput,
  where?: Maybe<TitulacionWhereInput>
};


export type MutationUpdateManyTransactionsArgs = {
  data: TransactionUpdateManyMutationInput,
  where?: Maybe<TransactionWhereInput>
};


export type MutationUpdateManyUsersArgs = {
  data: UserUpdateManyMutationInput,
  where?: Maybe<UserWhereInput>
};


export type MutationUpdateManyVenuesArgs = {
  data: VenueUpdateManyMutationInput,
  where?: Maybe<VenueWhereInput>
};


export type MutationUpdateMatriculaArgs = {
  data: MatriculaUpdateInput,
  where: MatriculaWhereUniqueInput
};


export type MutationUpdateMencionArgs = {
  data: MencionUpdateInput,
  where: MencionWhereUniqueInput
};


export type MutationUpdateNewsArgs = {
  data: NewsUpdateInput,
  where: NewsWhereUniqueInput
};


export type MutationUpdateOfficialDocumentArgs = {
  data: OfficialDocumentUpdateInput,
  where: OfficialDocumentWhereUniqueInput
};


export type MutationUpdateOrderArgs = {
  data: OrderUpdateInput,
  where: OrderWhereUniqueInput
};


export type MutationUpdatePeriodoOperativoArgs = {
  data: PeriodoOperativoUpdateInput,
  where: PeriodoOperativoWhereUniqueInput
};


export type MutationUpdateProductArgs = {
  data: ProductUpdateInput,
  where: ProductWhereUniqueInput
};


export type MutationUpdateProductCategoryArgs = {
  data: ProductCategoryUpdateInput,
  where: ProductCategoryWhereUniqueInput
};


export type MutationUpdateRatioArgs = {
  data: RatioUpdateInput,
  where: RatioWhereUniqueInput
};


export type MutationUpdateRecurrenciaArgs = {
  data: RecurrenciaUpdateInput,
  where: RecurrenciaWhereUniqueInput
};


export type MutationUpdateRoleArgs = {
  data: RoleUpdateInput,
  where: RoleWhereUniqueInput
};


export type MutationUpdateSesionArgs = {
  data: SesionUpdateInput,
  where: SesionWhereUniqueInput
};


export type MutationUpdateSocialLinkArgs = {
  data: SocialLinkUpdateInput,
  where: SocialLinkWhereUniqueInput
};


export type MutationUpdateSocialNetworkArgs = {
  data: SocialNetworkUpdateInput,
  where: SocialNetworkWhereUniqueInput
};


export type MutationUpdateSpaceArgs = {
  data: SpaceUpdateInput,
  where: SpaceWhereUniqueInput
};


export type MutationUpdateTitulacionArgs = {
  data: TitulacionUpdateInput,
  where: TitulacionWhereUniqueInput
};


export type MutationUpdateTransactionArgs = {
  data: TransactionUpdateInput,
  where: TransactionWhereUniqueInput
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type MutationUpdateVenueArgs = {
  data: VenueUpdateInput,
  where: VenueWhereUniqueInput
};


export type MutationUpsertAddressArgs = {
  create: AddressCreateInput,
  update: AddressUpdateInput,
  where: AddressWhereUniqueInput
};


export type MutationUpsertAsignaturaArgs = {
  create: AsignaturaCreateInput,
  update: AsignaturaUpdateInput,
  where: AsignaturaWhereUniqueInput
};


export type MutationUpsertAsistenciaArgs = {
  create: AsistenciaCreateInput,
  update: AsistenciaUpdateInput,
  where: AsistenciaWhereUniqueInput
};


export type MutationUpsertConvocatoriaExamenArgs = {
  create: ConvocatoriaExamenCreateInput,
  update: ConvocatoriaExamenUpdateInput,
  where: ConvocatoriaExamenWhereUniqueInput
};


export type MutationUpsertCursoArgs = {
  create: CursoCreateInput,
  update: CursoUpdateInput,
  where: CursoWhereUniqueInput
};


export type MutationUpsertDepartmentArgs = {
  create: DepartmentCreateInput,
  update: DepartmentUpdateInput,
  where: DepartmentWhereUniqueInput
};


export type MutationUpsertDesdobleArgs = {
  create: DesdobleCreateInput,
  update: DesdobleUpdateInput,
  where: DesdobleWhereUniqueInput
};


export type MutationUpsertDeviceArgs = {
  create: DeviceCreateInput,
  update: DeviceUpdateInput,
  where: DeviceWhereUniqueInput
};


export type MutationUpsertDiscountArgs = {
  create: DiscountCreateInput,
  update: DiscountUpdateInput,
  where: DiscountWhereUniqueInput
};


export type MutationUpsertDiscountRequestArgs = {
  create: DiscountRequestCreateInput,
  update: DiscountRequestUpdateInput,
  where: DiscountRequestWhereUniqueInput
};


export type MutationUpsertEstudioArgs = {
  create: EstudioCreateInput,
  update: EstudioUpdateInput,
  where: EstudioWhereUniqueInput
};


export type MutationUpsertEventArgs = {
  create: EventCreateInput,
  update: EventUpdateInput,
  where: EventWhereUniqueInput
};


export type MutationUpsertExamenArgs = {
  create: ExamenCreateInput,
  update: ExamenUpdateInput,
  where: ExamenWhereUniqueInput
};


export type MutationUpsertItemArgs = {
  create: ItemCreateInput,
  update: ItemUpdateInput,
  where: ItemWhereUniqueInput
};


export type MutationUpsertLeccionArgs = {
  create: LeccionCreateInput,
  update: LeccionUpdateInput,
  where: LeccionWhereUniqueInput
};


export type MutationUpsertMatriculaArgs = {
  create: MatriculaCreateInput,
  update: MatriculaUpdateInput,
  where: MatriculaWhereUniqueInput
};


export type MutationUpsertMencionArgs = {
  create: MencionCreateInput,
  update: MencionUpdateInput,
  where: MencionWhereUniqueInput
};


export type MutationUpsertNewsArgs = {
  create: NewsCreateInput,
  update: NewsUpdateInput,
  where: NewsWhereUniqueInput
};


export type MutationUpsertOfficialDocumentArgs = {
  create: OfficialDocumentCreateInput,
  update: OfficialDocumentUpdateInput,
  where: OfficialDocumentWhereUniqueInput
};


export type MutationUpsertOrderArgs = {
  create: OrderCreateInput,
  update: OrderUpdateInput,
  where: OrderWhereUniqueInput
};


export type MutationUpsertPeriodoOperativoArgs = {
  create: PeriodoOperativoCreateInput,
  update: PeriodoOperativoUpdateInput,
  where: PeriodoOperativoWhereUniqueInput
};


export type MutationUpsertProductArgs = {
  create: ProductCreateInput,
  update: ProductUpdateInput,
  where: ProductWhereUniqueInput
};


export type MutationUpsertProductCategoryArgs = {
  create: ProductCategoryCreateInput,
  update: ProductCategoryUpdateInput,
  where: ProductCategoryWhereUniqueInput
};


export type MutationUpsertRatioArgs = {
  create: RatioCreateInput,
  update: RatioUpdateInput,
  where: RatioWhereUniqueInput
};


export type MutationUpsertRecurrenciaArgs = {
  create: RecurrenciaCreateInput,
  update: RecurrenciaUpdateInput,
  where: RecurrenciaWhereUniqueInput
};


export type MutationUpsertRoleArgs = {
  create: RoleCreateInput,
  update: RoleUpdateInput,
  where: RoleWhereUniqueInput
};


export type MutationUpsertSesionArgs = {
  create: SesionCreateInput,
  update: SesionUpdateInput,
  where: SesionWhereUniqueInput
};


export type MutationUpsertSocialLinkArgs = {
  create: SocialLinkCreateInput,
  update: SocialLinkUpdateInput,
  where: SocialLinkWhereUniqueInput
};


export type MutationUpsertSocialNetworkArgs = {
  create: SocialNetworkCreateInput,
  update: SocialNetworkUpdateInput,
  where: SocialNetworkWhereUniqueInput
};


export type MutationUpsertSpaceArgs = {
  create: SpaceCreateInput,
  update: SpaceUpdateInput,
  where: SpaceWhereUniqueInput
};


export type MutationUpsertTitulacionArgs = {
  create: TitulacionCreateInput,
  update: TitulacionUpdateInput,
  where: TitulacionWhereUniqueInput
};


export type MutationUpsertTransactionArgs = {
  create: TransactionCreateInput,
  update: TransactionUpdateInput,
  where: TransactionWhereUniqueInput
};


export type MutationUpsertUserArgs = {
  create: UserCreateInput,
  update: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type MutationUpsertVenueArgs = {
  create: VenueCreateInput,
  update: VenueUpdateInput,
  where: VenueWhereUniqueInput
};

export type News = {
   __typename?: 'News',
  author: User,
  body: Scalars['String'],
  category?: Maybe<NewsFeedCategories>,
  createdAt: Scalars['DateTime'],
  expiration?: Maybe<Scalars['DateTime']>,
  featured?: Maybe<Scalars['Boolean']>,
  id: Scalars['ID'],
  imageURL?: Maybe<Scalars['String']>,
  status: AppNodeStatus,
  subtitle?: Maybe<Scalars['String']>,
  target: UserGroup,
  title: Scalars['String'],
  updatedAt: Scalars['DateTime'],
};

export type NewsConnection = {
   __typename?: 'NewsConnection',
  aggregate: AggregateNews,
  edges: Array<NewsEdge>,
  pageInfo: PageInfo,
};

export type NewsCreateInput = {
  author: UserCreateOneWithoutNewsesInput,
  body: Scalars['String'],
  category?: Maybe<NewsFeedCategories>,
  expiration?: Maybe<Scalars['DateTime']>,
  featured?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['ID']>,
  imageURL?: Maybe<Scalars['String']>,
  status?: Maybe<AppNodeStatus>,
  subtitle?: Maybe<Scalars['String']>,
  target: UserGroup,
  title: Scalars['String'],
};

export type NewsCreateManyWithoutAuthorInput = {
  connect?: Maybe<Array<NewsWhereUniqueInput>>,
  create?: Maybe<Array<NewsCreateWithoutAuthorInput>>,
};

export type NewsCreateWithoutAuthorInput = {
  body: Scalars['String'],
  category?: Maybe<NewsFeedCategories>,
  expiration?: Maybe<Scalars['DateTime']>,
  featured?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['ID']>,
  imageURL?: Maybe<Scalars['String']>,
  status?: Maybe<AppNodeStatus>,
  subtitle?: Maybe<Scalars['String']>,
  target: UserGroup,
  title: Scalars['String'],
};

export type NewsEdge = {
   __typename?: 'NewsEdge',
  cursor: Scalars['String'],
  node: News,
};

export enum NewsFeedCategories {
  Alert = 'ALERT',
  Call = 'CALL',
  News = 'NEWS'
}

export enum NewsOrderByInput {
  BodyAsc = 'body_ASC',
  BodyDesc = 'body_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  ExpirationAsc = 'expiration_ASC',
  ExpirationDesc = 'expiration_DESC',
  FeaturedAsc = 'featured_ASC',
  FeaturedDesc = 'featured_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ImageUrlAsc = 'imageURL_ASC',
  ImageUrlDesc = 'imageURL_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TargetAsc = 'target_ASC',
  TargetDesc = 'target_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type NewsScalarWhereInput = {
  AND?: Maybe<Array<NewsScalarWhereInput>>,
  body?: Maybe<Scalars['String']>,
  body_contains?: Maybe<Scalars['String']>,
  body_ends_with?: Maybe<Scalars['String']>,
  body_gt?: Maybe<Scalars['String']>,
  body_gte?: Maybe<Scalars['String']>,
  body_in?: Maybe<Array<Scalars['String']>>,
  body_lt?: Maybe<Scalars['String']>,
  body_lte?: Maybe<Scalars['String']>,
  body_not?: Maybe<Scalars['String']>,
  body_not_contains?: Maybe<Scalars['String']>,
  body_not_ends_with?: Maybe<Scalars['String']>,
  body_not_in?: Maybe<Array<Scalars['String']>>,
  body_not_starts_with?: Maybe<Scalars['String']>,
  body_starts_with?: Maybe<Scalars['String']>,
  category?: Maybe<NewsFeedCategories>,
  category_in?: Maybe<Array<NewsFeedCategories>>,
  category_not?: Maybe<NewsFeedCategories>,
  category_not_in?: Maybe<Array<NewsFeedCategories>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  expiration?: Maybe<Scalars['DateTime']>,
  expiration_gt?: Maybe<Scalars['DateTime']>,
  expiration_gte?: Maybe<Scalars['DateTime']>,
  expiration_in?: Maybe<Array<Scalars['DateTime']>>,
  expiration_lt?: Maybe<Scalars['DateTime']>,
  expiration_lte?: Maybe<Scalars['DateTime']>,
  expiration_not?: Maybe<Scalars['DateTime']>,
  expiration_not_in?: Maybe<Array<Scalars['DateTime']>>,
  featured?: Maybe<Scalars['Boolean']>,
  featured_not?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  imageURL?: Maybe<Scalars['String']>,
  imageURL_contains?: Maybe<Scalars['String']>,
  imageURL_ends_with?: Maybe<Scalars['String']>,
  imageURL_gt?: Maybe<Scalars['String']>,
  imageURL_gte?: Maybe<Scalars['String']>,
  imageURL_in?: Maybe<Array<Scalars['String']>>,
  imageURL_lt?: Maybe<Scalars['String']>,
  imageURL_lte?: Maybe<Scalars['String']>,
  imageURL_not?: Maybe<Scalars['String']>,
  imageURL_not_contains?: Maybe<Scalars['String']>,
  imageURL_not_ends_with?: Maybe<Scalars['String']>,
  imageURL_not_in?: Maybe<Array<Scalars['String']>>,
  imageURL_not_starts_with?: Maybe<Scalars['String']>,
  imageURL_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<NewsScalarWhereInput>>,
  OR?: Maybe<Array<NewsScalarWhereInput>>,
  status?: Maybe<AppNodeStatus>,
  status_in?: Maybe<Array<AppNodeStatus>>,
  status_not?: Maybe<AppNodeStatus>,
  status_not_in?: Maybe<Array<AppNodeStatus>>,
  subtitle?: Maybe<Scalars['String']>,
  subtitle_contains?: Maybe<Scalars['String']>,
  subtitle_ends_with?: Maybe<Scalars['String']>,
  subtitle_gt?: Maybe<Scalars['String']>,
  subtitle_gte?: Maybe<Scalars['String']>,
  subtitle_in?: Maybe<Array<Scalars['String']>>,
  subtitle_lt?: Maybe<Scalars['String']>,
  subtitle_lte?: Maybe<Scalars['String']>,
  subtitle_not?: Maybe<Scalars['String']>,
  subtitle_not_contains?: Maybe<Scalars['String']>,
  subtitle_not_ends_with?: Maybe<Scalars['String']>,
  subtitle_not_in?: Maybe<Array<Scalars['String']>>,
  subtitle_not_starts_with?: Maybe<Scalars['String']>,
  subtitle_starts_with?: Maybe<Scalars['String']>,
  target?: Maybe<UserGroup>,
  target_in?: Maybe<Array<UserGroup>>,
  target_not?: Maybe<UserGroup>,
  target_not_in?: Maybe<Array<UserGroup>>,
  title?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_gt?: Maybe<Scalars['String']>,
  title_gte?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Scalars['String']>>,
  title_lt?: Maybe<Scalars['String']>,
  title_lte?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  title_not_in?: Maybe<Array<Scalars['String']>>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type NewsUpdateInput = {
  author?: Maybe<UserUpdateOneRequiredWithoutNewsesInput>,
  body?: Maybe<Scalars['String']>,
  category?: Maybe<NewsFeedCategories>,
  expiration?: Maybe<Scalars['DateTime']>,
  featured?: Maybe<Scalars['Boolean']>,
  imageURL?: Maybe<Scalars['String']>,
  status?: Maybe<AppNodeStatus>,
  subtitle?: Maybe<Scalars['String']>,
  target?: Maybe<UserGroup>,
  title?: Maybe<Scalars['String']>,
};

export type NewsUpdateManyDataInput = {
  body?: Maybe<Scalars['String']>,
  category?: Maybe<NewsFeedCategories>,
  expiration?: Maybe<Scalars['DateTime']>,
  featured?: Maybe<Scalars['Boolean']>,
  imageURL?: Maybe<Scalars['String']>,
  status?: Maybe<AppNodeStatus>,
  subtitle?: Maybe<Scalars['String']>,
  target?: Maybe<UserGroup>,
  title?: Maybe<Scalars['String']>,
};

export type NewsUpdateManyMutationInput = {
  body?: Maybe<Scalars['String']>,
  category?: Maybe<NewsFeedCategories>,
  expiration?: Maybe<Scalars['DateTime']>,
  featured?: Maybe<Scalars['Boolean']>,
  imageURL?: Maybe<Scalars['String']>,
  status?: Maybe<AppNodeStatus>,
  subtitle?: Maybe<Scalars['String']>,
  target?: Maybe<UserGroup>,
  title?: Maybe<Scalars['String']>,
};

export type NewsUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<NewsWhereUniqueInput>>,
  create?: Maybe<Array<NewsCreateWithoutAuthorInput>>,
  delete?: Maybe<Array<NewsWhereUniqueInput>>,
  deleteMany?: Maybe<Array<NewsScalarWhereInput>>,
  disconnect?: Maybe<Array<NewsWhereUniqueInput>>,
  set?: Maybe<Array<NewsWhereUniqueInput>>,
  update?: Maybe<Array<NewsUpdateWithWhereUniqueWithoutAuthorInput>>,
  updateMany?: Maybe<Array<NewsUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<NewsUpsertWithWhereUniqueWithoutAuthorInput>>,
};

export type NewsUpdateManyWithWhereNestedInput = {
  data: NewsUpdateManyDataInput,
  where: NewsScalarWhereInput,
};

export type NewsUpdateWithoutAuthorDataInput = {
  body?: Maybe<Scalars['String']>,
  category?: Maybe<NewsFeedCategories>,
  expiration?: Maybe<Scalars['DateTime']>,
  featured?: Maybe<Scalars['Boolean']>,
  imageURL?: Maybe<Scalars['String']>,
  status?: Maybe<AppNodeStatus>,
  subtitle?: Maybe<Scalars['String']>,
  target?: Maybe<UserGroup>,
  title?: Maybe<Scalars['String']>,
};

export type NewsUpdateWithWhereUniqueWithoutAuthorInput = {
  data: NewsUpdateWithoutAuthorDataInput,
  where: NewsWhereUniqueInput,
};

export type NewsUpsertWithWhereUniqueWithoutAuthorInput = {
  create: NewsCreateWithoutAuthorInput,
  update: NewsUpdateWithoutAuthorDataInput,
  where: NewsWhereUniqueInput,
};

export type NewsWhereInput = {
  AND?: Maybe<Array<NewsWhereInput>>,
  author?: Maybe<UserWhereInput>,
  body?: Maybe<Scalars['String']>,
  body_contains?: Maybe<Scalars['String']>,
  body_ends_with?: Maybe<Scalars['String']>,
  body_gt?: Maybe<Scalars['String']>,
  body_gte?: Maybe<Scalars['String']>,
  body_in?: Maybe<Array<Scalars['String']>>,
  body_lt?: Maybe<Scalars['String']>,
  body_lte?: Maybe<Scalars['String']>,
  body_not?: Maybe<Scalars['String']>,
  body_not_contains?: Maybe<Scalars['String']>,
  body_not_ends_with?: Maybe<Scalars['String']>,
  body_not_in?: Maybe<Array<Scalars['String']>>,
  body_not_starts_with?: Maybe<Scalars['String']>,
  body_starts_with?: Maybe<Scalars['String']>,
  category?: Maybe<NewsFeedCategories>,
  category_in?: Maybe<Array<NewsFeedCategories>>,
  category_not?: Maybe<NewsFeedCategories>,
  category_not_in?: Maybe<Array<NewsFeedCategories>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  expiration?: Maybe<Scalars['DateTime']>,
  expiration_gt?: Maybe<Scalars['DateTime']>,
  expiration_gte?: Maybe<Scalars['DateTime']>,
  expiration_in?: Maybe<Array<Scalars['DateTime']>>,
  expiration_lt?: Maybe<Scalars['DateTime']>,
  expiration_lte?: Maybe<Scalars['DateTime']>,
  expiration_not?: Maybe<Scalars['DateTime']>,
  expiration_not_in?: Maybe<Array<Scalars['DateTime']>>,
  featured?: Maybe<Scalars['Boolean']>,
  featured_not?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  imageURL?: Maybe<Scalars['String']>,
  imageURL_contains?: Maybe<Scalars['String']>,
  imageURL_ends_with?: Maybe<Scalars['String']>,
  imageURL_gt?: Maybe<Scalars['String']>,
  imageURL_gte?: Maybe<Scalars['String']>,
  imageURL_in?: Maybe<Array<Scalars['String']>>,
  imageURL_lt?: Maybe<Scalars['String']>,
  imageURL_lte?: Maybe<Scalars['String']>,
  imageURL_not?: Maybe<Scalars['String']>,
  imageURL_not_contains?: Maybe<Scalars['String']>,
  imageURL_not_ends_with?: Maybe<Scalars['String']>,
  imageURL_not_in?: Maybe<Array<Scalars['String']>>,
  imageURL_not_starts_with?: Maybe<Scalars['String']>,
  imageURL_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<NewsWhereInput>>,
  OR?: Maybe<Array<NewsWhereInput>>,
  status?: Maybe<AppNodeStatus>,
  status_in?: Maybe<Array<AppNodeStatus>>,
  status_not?: Maybe<AppNodeStatus>,
  status_not_in?: Maybe<Array<AppNodeStatus>>,
  subtitle?: Maybe<Scalars['String']>,
  subtitle_contains?: Maybe<Scalars['String']>,
  subtitle_ends_with?: Maybe<Scalars['String']>,
  subtitle_gt?: Maybe<Scalars['String']>,
  subtitle_gte?: Maybe<Scalars['String']>,
  subtitle_in?: Maybe<Array<Scalars['String']>>,
  subtitle_lt?: Maybe<Scalars['String']>,
  subtitle_lte?: Maybe<Scalars['String']>,
  subtitle_not?: Maybe<Scalars['String']>,
  subtitle_not_contains?: Maybe<Scalars['String']>,
  subtitle_not_ends_with?: Maybe<Scalars['String']>,
  subtitle_not_in?: Maybe<Array<Scalars['String']>>,
  subtitle_not_starts_with?: Maybe<Scalars['String']>,
  subtitle_starts_with?: Maybe<Scalars['String']>,
  target?: Maybe<UserGroup>,
  target_in?: Maybe<Array<UserGroup>>,
  target_not?: Maybe<UserGroup>,
  target_not_in?: Maybe<Array<UserGroup>>,
  title?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_gt?: Maybe<Scalars['String']>,
  title_gte?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Scalars['String']>>,
  title_lt?: Maybe<Scalars['String']>,
  title_lte?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  title_not_in?: Maybe<Array<Scalars['String']>>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type NewsWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type OfficialDocument = {
   __typename?: 'OfficialDocument',
  createdAt: Scalars['DateTime'],
  expiration?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  number: Scalars['String'],
  other?: Maybe<Scalars['String']>,
  owner: User,
  type?: Maybe<OfficialDocumentType>,
  updatedAt: Scalars['DateTime'],
};

export type OfficialDocumentConnection = {
   __typename?: 'OfficialDocumentConnection',
  aggregate: AggregateOfficialDocument,
  edges: Array<OfficialDocumentEdge>,
  pageInfo: PageInfo,
};

export type OfficialDocumentCreateInput = {
  expiration?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  number: Scalars['String'],
  other?: Maybe<Scalars['String']>,
  owner: UserCreateOneWithoutOfficialDocumentsInput,
  type?: Maybe<OfficialDocumentType>,
};

export type OfficialDocumentCreateManyWithoutOwnerInput = {
  connect?: Maybe<Array<OfficialDocumentWhereUniqueInput>>,
  create?: Maybe<Array<OfficialDocumentCreateWithoutOwnerInput>>,
};

export type OfficialDocumentCreateWithoutOwnerInput = {
  expiration?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  number: Scalars['String'],
  other?: Maybe<Scalars['String']>,
  type?: Maybe<OfficialDocumentType>,
};

export type OfficialDocumentEdge = {
   __typename?: 'OfficialDocumentEdge',
  cursor: Scalars['String'],
  node: OfficialDocument,
};

export enum OfficialDocumentOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  ExpirationAsc = 'expiration_ASC',
  ExpirationDesc = 'expiration_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NumberAsc = 'number_ASC',
  NumberDesc = 'number_DESC',
  OtherAsc = 'other_ASC',
  OtherDesc = 'other_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type OfficialDocumentScalarWhereInput = {
  AND?: Maybe<Array<OfficialDocumentScalarWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  expiration?: Maybe<Scalars['DateTime']>,
  expiration_gt?: Maybe<Scalars['DateTime']>,
  expiration_gte?: Maybe<Scalars['DateTime']>,
  expiration_in?: Maybe<Array<Scalars['DateTime']>>,
  expiration_lt?: Maybe<Scalars['DateTime']>,
  expiration_lte?: Maybe<Scalars['DateTime']>,
  expiration_not?: Maybe<Scalars['DateTime']>,
  expiration_not_in?: Maybe<Array<Scalars['DateTime']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  NOT?: Maybe<Array<OfficialDocumentScalarWhereInput>>,
  number?: Maybe<Scalars['String']>,
  number_contains?: Maybe<Scalars['String']>,
  number_ends_with?: Maybe<Scalars['String']>,
  number_gt?: Maybe<Scalars['String']>,
  number_gte?: Maybe<Scalars['String']>,
  number_in?: Maybe<Array<Scalars['String']>>,
  number_lt?: Maybe<Scalars['String']>,
  number_lte?: Maybe<Scalars['String']>,
  number_not?: Maybe<Scalars['String']>,
  number_not_contains?: Maybe<Scalars['String']>,
  number_not_ends_with?: Maybe<Scalars['String']>,
  number_not_in?: Maybe<Array<Scalars['String']>>,
  number_not_starts_with?: Maybe<Scalars['String']>,
  number_starts_with?: Maybe<Scalars['String']>,
  OR?: Maybe<Array<OfficialDocumentScalarWhereInput>>,
  other?: Maybe<Scalars['String']>,
  other_contains?: Maybe<Scalars['String']>,
  other_ends_with?: Maybe<Scalars['String']>,
  other_gt?: Maybe<Scalars['String']>,
  other_gte?: Maybe<Scalars['String']>,
  other_in?: Maybe<Array<Scalars['String']>>,
  other_lt?: Maybe<Scalars['String']>,
  other_lte?: Maybe<Scalars['String']>,
  other_not?: Maybe<Scalars['String']>,
  other_not_contains?: Maybe<Scalars['String']>,
  other_not_ends_with?: Maybe<Scalars['String']>,
  other_not_in?: Maybe<Array<Scalars['String']>>,
  other_not_starts_with?: Maybe<Scalars['String']>,
  other_starts_with?: Maybe<Scalars['String']>,
  type?: Maybe<OfficialDocumentType>,
  type_in?: Maybe<Array<OfficialDocumentType>>,
  type_not?: Maybe<OfficialDocumentType>,
  type_not_in?: Maybe<Array<OfficialDocumentType>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export enum OfficialDocumentType {
  Drivinglicense = 'DRIVINGLICENSE',
  Nationalid = 'NATIONALID',
  Other = 'OTHER',
  Passport = 'PASSPORT',
  Socialsecurity = 'SOCIALSECURITY'
}

export type OfficialDocumentUpdateInput = {
  expiration?: Maybe<Scalars['DateTime']>,
  number?: Maybe<Scalars['String']>,
  other?: Maybe<Scalars['String']>,
  owner?: Maybe<UserUpdateOneRequiredWithoutOfficialDocumentsInput>,
  type?: Maybe<OfficialDocumentType>,
};

export type OfficialDocumentUpdateManyDataInput = {
  expiration?: Maybe<Scalars['DateTime']>,
  number?: Maybe<Scalars['String']>,
  other?: Maybe<Scalars['String']>,
  type?: Maybe<OfficialDocumentType>,
};

export type OfficialDocumentUpdateManyMutationInput = {
  expiration?: Maybe<Scalars['DateTime']>,
  number?: Maybe<Scalars['String']>,
  other?: Maybe<Scalars['String']>,
  type?: Maybe<OfficialDocumentType>,
};

export type OfficialDocumentUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<OfficialDocumentWhereUniqueInput>>,
  create?: Maybe<Array<OfficialDocumentCreateWithoutOwnerInput>>,
  delete?: Maybe<Array<OfficialDocumentWhereUniqueInput>>,
  deleteMany?: Maybe<Array<OfficialDocumentScalarWhereInput>>,
  disconnect?: Maybe<Array<OfficialDocumentWhereUniqueInput>>,
  set?: Maybe<Array<OfficialDocumentWhereUniqueInput>>,
  update?: Maybe<Array<OfficialDocumentUpdateWithWhereUniqueWithoutOwnerInput>>,
  updateMany?: Maybe<Array<OfficialDocumentUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<OfficialDocumentUpsertWithWhereUniqueWithoutOwnerInput>>,
};

export type OfficialDocumentUpdateManyWithWhereNestedInput = {
  data: OfficialDocumentUpdateManyDataInput,
  where: OfficialDocumentScalarWhereInput,
};

export type OfficialDocumentUpdateWithoutOwnerDataInput = {
  expiration?: Maybe<Scalars['DateTime']>,
  number?: Maybe<Scalars['String']>,
  other?: Maybe<Scalars['String']>,
  type?: Maybe<OfficialDocumentType>,
};

export type OfficialDocumentUpdateWithWhereUniqueWithoutOwnerInput = {
  data: OfficialDocumentUpdateWithoutOwnerDataInput,
  where: OfficialDocumentWhereUniqueInput,
};

export type OfficialDocumentUpsertWithWhereUniqueWithoutOwnerInput = {
  create: OfficialDocumentCreateWithoutOwnerInput,
  update: OfficialDocumentUpdateWithoutOwnerDataInput,
  where: OfficialDocumentWhereUniqueInput,
};

export type OfficialDocumentWhereInput = {
  AND?: Maybe<Array<OfficialDocumentWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  expiration?: Maybe<Scalars['DateTime']>,
  expiration_gt?: Maybe<Scalars['DateTime']>,
  expiration_gte?: Maybe<Scalars['DateTime']>,
  expiration_in?: Maybe<Array<Scalars['DateTime']>>,
  expiration_lt?: Maybe<Scalars['DateTime']>,
  expiration_lte?: Maybe<Scalars['DateTime']>,
  expiration_not?: Maybe<Scalars['DateTime']>,
  expiration_not_in?: Maybe<Array<Scalars['DateTime']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  NOT?: Maybe<Array<OfficialDocumentWhereInput>>,
  number?: Maybe<Scalars['String']>,
  number_contains?: Maybe<Scalars['String']>,
  number_ends_with?: Maybe<Scalars['String']>,
  number_gt?: Maybe<Scalars['String']>,
  number_gte?: Maybe<Scalars['String']>,
  number_in?: Maybe<Array<Scalars['String']>>,
  number_lt?: Maybe<Scalars['String']>,
  number_lte?: Maybe<Scalars['String']>,
  number_not?: Maybe<Scalars['String']>,
  number_not_contains?: Maybe<Scalars['String']>,
  number_not_ends_with?: Maybe<Scalars['String']>,
  number_not_in?: Maybe<Array<Scalars['String']>>,
  number_not_starts_with?: Maybe<Scalars['String']>,
  number_starts_with?: Maybe<Scalars['String']>,
  OR?: Maybe<Array<OfficialDocumentWhereInput>>,
  other?: Maybe<Scalars['String']>,
  other_contains?: Maybe<Scalars['String']>,
  other_ends_with?: Maybe<Scalars['String']>,
  other_gt?: Maybe<Scalars['String']>,
  other_gte?: Maybe<Scalars['String']>,
  other_in?: Maybe<Array<Scalars['String']>>,
  other_lt?: Maybe<Scalars['String']>,
  other_lte?: Maybe<Scalars['String']>,
  other_not?: Maybe<Scalars['String']>,
  other_not_contains?: Maybe<Scalars['String']>,
  other_not_ends_with?: Maybe<Scalars['String']>,
  other_not_in?: Maybe<Array<Scalars['String']>>,
  other_not_starts_with?: Maybe<Scalars['String']>,
  other_starts_with?: Maybe<Scalars['String']>,
  owner?: Maybe<UserWhereInput>,
  type?: Maybe<OfficialDocumentType>,
  type_in?: Maybe<Array<OfficialDocumentType>>,
  type_not?: Maybe<OfficialDocumentType>,
  type_not_in?: Maybe<Array<OfficialDocumentType>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type OfficialDocumentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  number?: Maybe<Scalars['String']>,
};

export type Order = {
   __typename?: 'Order',
  createdAt: Scalars['DateTime'],
  customer: User,
  id: Scalars['ID'],
  items?: Maybe<Array<Item>>,
  metadata?: Maybe<Scalars['Json']>,
  paymentDue?: Maybe<Scalars['DateTime']>,
  paymentSettled: Scalars['Boolean'],
  reference: Scalars['String'],
  total: Scalars['Float'],
  transactions?: Maybe<Array<Transaction>>,
  updatedAt: Scalars['DateTime'],
  vatRate?: Maybe<Scalars['Int']>,
};


export type OrderItemsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ItemOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ItemWhereInput>
};


export type OrderTransactionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<TransactionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<TransactionWhereInput>
};

export type OrderConnection = {
   __typename?: 'OrderConnection',
  aggregate: AggregateOrder,
  edges: Array<OrderEdge>,
  pageInfo: PageInfo,
};

export type OrderCreateInput = {
  customer: UserCreateOneInput,
  id?: Maybe<Scalars['ID']>,
  items?: Maybe<ItemCreateManyWithoutOrderInput>,
  metadata?: Maybe<Scalars['Json']>,
  paymentDue?: Maybe<Scalars['DateTime']>,
  paymentSettled?: Maybe<Scalars['Boolean']>,
  reference: Scalars['String'],
  total: Scalars['Float'],
  transactions?: Maybe<TransactionCreateManyWithoutOrderInput>,
  vatRate?: Maybe<Scalars['Int']>,
};

export type OrderCreateOneWithoutItemsInput = {
  connect?: Maybe<OrderWhereUniqueInput>,
  create?: Maybe<OrderCreateWithoutItemsInput>,
};

export type OrderCreateOneWithoutTransactionsInput = {
  connect?: Maybe<OrderWhereUniqueInput>,
  create?: Maybe<OrderCreateWithoutTransactionsInput>,
};

export type OrderCreateWithoutItemsInput = {
  customer: UserCreateOneInput,
  id?: Maybe<Scalars['ID']>,
  metadata?: Maybe<Scalars['Json']>,
  paymentDue?: Maybe<Scalars['DateTime']>,
  paymentSettled?: Maybe<Scalars['Boolean']>,
  reference: Scalars['String'],
  total: Scalars['Float'],
  transactions?: Maybe<TransactionCreateManyWithoutOrderInput>,
  vatRate?: Maybe<Scalars['Int']>,
};

export type OrderCreateWithoutTransactionsInput = {
  customer: UserCreateOneInput,
  id?: Maybe<Scalars['ID']>,
  items?: Maybe<ItemCreateManyWithoutOrderInput>,
  metadata?: Maybe<Scalars['Json']>,
  paymentDue?: Maybe<Scalars['DateTime']>,
  paymentSettled?: Maybe<Scalars['Boolean']>,
  reference: Scalars['String'],
  total: Scalars['Float'],
  vatRate?: Maybe<Scalars['Int']>,
};

export type OrderEdge = {
   __typename?: 'OrderEdge',
  cursor: Scalars['String'],
  node: Order,
};

export enum OrderOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MetadataAsc = 'metadata_ASC',
  MetadataDesc = 'metadata_DESC',
  PaymentDueAsc = 'paymentDue_ASC',
  PaymentDueDesc = 'paymentDue_DESC',
  PaymentSettledAsc = 'paymentSettled_ASC',
  PaymentSettledDesc = 'paymentSettled_DESC',
  ReferenceAsc = 'reference_ASC',
  ReferenceDesc = 'reference_DESC',
  TotalAsc = 'total_ASC',
  TotalDesc = 'total_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VatRateAsc = 'vatRate_ASC',
  VatRateDesc = 'vatRate_DESC'
}

export type OrderUpdateInput = {
  customer?: Maybe<UserUpdateOneRequiredInput>,
  items?: Maybe<ItemUpdateManyWithoutOrderInput>,
  metadata?: Maybe<Scalars['Json']>,
  paymentDue?: Maybe<Scalars['DateTime']>,
  paymentSettled?: Maybe<Scalars['Boolean']>,
  reference?: Maybe<Scalars['String']>,
  total?: Maybe<Scalars['Float']>,
  transactions?: Maybe<TransactionUpdateManyWithoutOrderInput>,
  vatRate?: Maybe<Scalars['Int']>,
};

export type OrderUpdateManyMutationInput = {
  metadata?: Maybe<Scalars['Json']>,
  paymentDue?: Maybe<Scalars['DateTime']>,
  paymentSettled?: Maybe<Scalars['Boolean']>,
  reference?: Maybe<Scalars['String']>,
  total?: Maybe<Scalars['Float']>,
  vatRate?: Maybe<Scalars['Int']>,
};

export type OrderUpdateOneRequiredWithoutItemsInput = {
  connect?: Maybe<OrderWhereUniqueInput>,
  create?: Maybe<OrderCreateWithoutItemsInput>,
  update?: Maybe<OrderUpdateWithoutItemsDataInput>,
  upsert?: Maybe<OrderUpsertWithoutItemsInput>,
};

export type OrderUpdateOneWithoutTransactionsInput = {
  connect?: Maybe<OrderWhereUniqueInput>,
  create?: Maybe<OrderCreateWithoutTransactionsInput>,
  delete?: Maybe<Scalars['Boolean']>,
  disconnect?: Maybe<Scalars['Boolean']>,
  update?: Maybe<OrderUpdateWithoutTransactionsDataInput>,
  upsert?: Maybe<OrderUpsertWithoutTransactionsInput>,
};

export type OrderUpdateWithoutItemsDataInput = {
  customer?: Maybe<UserUpdateOneRequiredInput>,
  metadata?: Maybe<Scalars['Json']>,
  paymentDue?: Maybe<Scalars['DateTime']>,
  paymentSettled?: Maybe<Scalars['Boolean']>,
  reference?: Maybe<Scalars['String']>,
  total?: Maybe<Scalars['Float']>,
  transactions?: Maybe<TransactionUpdateManyWithoutOrderInput>,
  vatRate?: Maybe<Scalars['Int']>,
};

export type OrderUpdateWithoutTransactionsDataInput = {
  customer?: Maybe<UserUpdateOneRequiredInput>,
  items?: Maybe<ItemUpdateManyWithoutOrderInput>,
  metadata?: Maybe<Scalars['Json']>,
  paymentDue?: Maybe<Scalars['DateTime']>,
  paymentSettled?: Maybe<Scalars['Boolean']>,
  reference?: Maybe<Scalars['String']>,
  total?: Maybe<Scalars['Float']>,
  vatRate?: Maybe<Scalars['Int']>,
};

export type OrderUpsertWithoutItemsInput = {
  create: OrderCreateWithoutItemsInput,
  update: OrderUpdateWithoutItemsDataInput,
};

export type OrderUpsertWithoutTransactionsInput = {
  create: OrderCreateWithoutTransactionsInput,
  update: OrderUpdateWithoutTransactionsDataInput,
};

export type OrderWhereInput = {
  AND?: Maybe<Array<OrderWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  customer?: Maybe<UserWhereInput>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  items_every?: Maybe<ItemWhereInput>,
  items_none?: Maybe<ItemWhereInput>,
  items_some?: Maybe<ItemWhereInput>,
  NOT?: Maybe<Array<OrderWhereInput>>,
  OR?: Maybe<Array<OrderWhereInput>>,
  paymentDue?: Maybe<Scalars['DateTime']>,
  paymentDue_gt?: Maybe<Scalars['DateTime']>,
  paymentDue_gte?: Maybe<Scalars['DateTime']>,
  paymentDue_in?: Maybe<Array<Scalars['DateTime']>>,
  paymentDue_lt?: Maybe<Scalars['DateTime']>,
  paymentDue_lte?: Maybe<Scalars['DateTime']>,
  paymentDue_not?: Maybe<Scalars['DateTime']>,
  paymentDue_not_in?: Maybe<Array<Scalars['DateTime']>>,
  paymentSettled?: Maybe<Scalars['Boolean']>,
  paymentSettled_not?: Maybe<Scalars['Boolean']>,
  reference?: Maybe<Scalars['String']>,
  reference_contains?: Maybe<Scalars['String']>,
  reference_ends_with?: Maybe<Scalars['String']>,
  reference_gt?: Maybe<Scalars['String']>,
  reference_gte?: Maybe<Scalars['String']>,
  reference_in?: Maybe<Array<Scalars['String']>>,
  reference_lt?: Maybe<Scalars['String']>,
  reference_lte?: Maybe<Scalars['String']>,
  reference_not?: Maybe<Scalars['String']>,
  reference_not_contains?: Maybe<Scalars['String']>,
  reference_not_ends_with?: Maybe<Scalars['String']>,
  reference_not_in?: Maybe<Array<Scalars['String']>>,
  reference_not_starts_with?: Maybe<Scalars['String']>,
  reference_starts_with?: Maybe<Scalars['String']>,
  total?: Maybe<Scalars['Float']>,
  total_gt?: Maybe<Scalars['Float']>,
  total_gte?: Maybe<Scalars['Float']>,
  total_in?: Maybe<Array<Scalars['Float']>>,
  total_lt?: Maybe<Scalars['Float']>,
  total_lte?: Maybe<Scalars['Float']>,
  total_not?: Maybe<Scalars['Float']>,
  total_not_in?: Maybe<Array<Scalars['Float']>>,
  transactions_every?: Maybe<TransactionWhereInput>,
  transactions_none?: Maybe<TransactionWhereInput>,
  transactions_some?: Maybe<TransactionWhereInput>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  vatRate?: Maybe<Scalars['Int']>,
  vatRate_gt?: Maybe<Scalars['Int']>,
  vatRate_gte?: Maybe<Scalars['Int']>,
  vatRate_in?: Maybe<Array<Scalars['Int']>>,
  vatRate_lt?: Maybe<Scalars['Int']>,
  vatRate_lte?: Maybe<Scalars['Int']>,
  vatRate_not?: Maybe<Scalars['Int']>,
  vatRate_not_in?: Maybe<Array<Scalars['Int']>>,
};

export type OrderWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  reference?: Maybe<Scalars['String']>,
};

export type PageInfo = {
   __typename?: 'PageInfo',
  endCursor?: Maybe<Scalars['String']>,
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['String']>,
};

export type PeriodoOperativo = {
   __typename?: 'PeriodoOperativo',
  convocatoriasExamenes?: Maybe<Array<ConvocatoriaExamen>>,
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  lecciones?: Maybe<Array<Leccion>>,
  updatedAt: Scalars['DateTime'],
  yearEnd: Scalars['Int'],
  yearStart: Scalars['Int'],
};


export type PeriodoOperativoConvocatoriasExamenesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ConvocatoriaExamenOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ConvocatoriaExamenWhereInput>
};


export type PeriodoOperativoLeccionesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<LeccionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<LeccionWhereInput>
};

export type PeriodoOperativoConnection = {
   __typename?: 'PeriodoOperativoConnection',
  aggregate: AggregatePeriodoOperativo,
  edges: Array<PeriodoOperativoEdge>,
  pageInfo: PageInfo,
};

export type PeriodoOperativoCreateInput = {
  convocatoriasExamenes?: Maybe<ConvocatoriaExamenCreateManyWithoutPeriodoInput>,
  id?: Maybe<Scalars['ID']>,
  lecciones?: Maybe<LeccionCreateManyWithoutPeriodoInput>,
  yearEnd: Scalars['Int'],
  yearStart: Scalars['Int'],
};

export type PeriodoOperativoCreateOneWithoutConvocatoriasExamenesInput = {
  connect?: Maybe<PeriodoOperativoWhereUniqueInput>,
  create?: Maybe<PeriodoOperativoCreateWithoutConvocatoriasExamenesInput>,
};

export type PeriodoOperativoCreateOneWithoutLeccionesInput = {
  connect?: Maybe<PeriodoOperativoWhereUniqueInput>,
  create?: Maybe<PeriodoOperativoCreateWithoutLeccionesInput>,
};

export type PeriodoOperativoCreateWithoutConvocatoriasExamenesInput = {
  id?: Maybe<Scalars['ID']>,
  lecciones?: Maybe<LeccionCreateManyWithoutPeriodoInput>,
  yearEnd: Scalars['Int'],
  yearStart: Scalars['Int'],
};

export type PeriodoOperativoCreateWithoutLeccionesInput = {
  convocatoriasExamenes?: Maybe<ConvocatoriaExamenCreateManyWithoutPeriodoInput>,
  id?: Maybe<Scalars['ID']>,
  yearEnd: Scalars['Int'],
  yearStart: Scalars['Int'],
};

export type PeriodoOperativoEdge = {
   __typename?: 'PeriodoOperativoEdge',
  cursor: Scalars['String'],
  node: PeriodoOperativo,
};

export enum PeriodoOperativoOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  YearEndAsc = 'yearEnd_ASC',
  YearEndDesc = 'yearEnd_DESC',
  YearStartAsc = 'yearStart_ASC',
  YearStartDesc = 'yearStart_DESC'
}

export type PeriodoOperativoUpdateInput = {
  convocatoriasExamenes?: Maybe<ConvocatoriaExamenUpdateManyWithoutPeriodoInput>,
  lecciones?: Maybe<LeccionUpdateManyWithoutPeriodoInput>,
  yearEnd?: Maybe<Scalars['Int']>,
  yearStart?: Maybe<Scalars['Int']>,
};

export type PeriodoOperativoUpdateManyMutationInput = {
  yearEnd?: Maybe<Scalars['Int']>,
  yearStart?: Maybe<Scalars['Int']>,
};

export type PeriodoOperativoUpdateOneRequiredWithoutConvocatoriasExamenesInput = {
  connect?: Maybe<PeriodoOperativoWhereUniqueInput>,
  create?: Maybe<PeriodoOperativoCreateWithoutConvocatoriasExamenesInput>,
  update?: Maybe<PeriodoOperativoUpdateWithoutConvocatoriasExamenesDataInput>,
  upsert?: Maybe<PeriodoOperativoUpsertWithoutConvocatoriasExamenesInput>,
};

export type PeriodoOperativoUpdateOneRequiredWithoutLeccionesInput = {
  connect?: Maybe<PeriodoOperativoWhereUniqueInput>,
  create?: Maybe<PeriodoOperativoCreateWithoutLeccionesInput>,
  update?: Maybe<PeriodoOperativoUpdateWithoutLeccionesDataInput>,
  upsert?: Maybe<PeriodoOperativoUpsertWithoutLeccionesInput>,
};

export type PeriodoOperativoUpdateWithoutConvocatoriasExamenesDataInput = {
  lecciones?: Maybe<LeccionUpdateManyWithoutPeriodoInput>,
  yearEnd?: Maybe<Scalars['Int']>,
  yearStart?: Maybe<Scalars['Int']>,
};

export type PeriodoOperativoUpdateWithoutLeccionesDataInput = {
  convocatoriasExamenes?: Maybe<ConvocatoriaExamenUpdateManyWithoutPeriodoInput>,
  yearEnd?: Maybe<Scalars['Int']>,
  yearStart?: Maybe<Scalars['Int']>,
};

export type PeriodoOperativoUpsertWithoutConvocatoriasExamenesInput = {
  create: PeriodoOperativoCreateWithoutConvocatoriasExamenesInput,
  update: PeriodoOperativoUpdateWithoutConvocatoriasExamenesDataInput,
};

export type PeriodoOperativoUpsertWithoutLeccionesInput = {
  create: PeriodoOperativoCreateWithoutLeccionesInput,
  update: PeriodoOperativoUpdateWithoutLeccionesDataInput,
};

export type PeriodoOperativoWhereInput = {
  AND?: Maybe<Array<PeriodoOperativoWhereInput>>,
  convocatoriasExamenes_every?: Maybe<ConvocatoriaExamenWhereInput>,
  convocatoriasExamenes_none?: Maybe<ConvocatoriaExamenWhereInput>,
  convocatoriasExamenes_some?: Maybe<ConvocatoriaExamenWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  lecciones_every?: Maybe<LeccionWhereInput>,
  lecciones_none?: Maybe<LeccionWhereInput>,
  lecciones_some?: Maybe<LeccionWhereInput>,
  NOT?: Maybe<Array<PeriodoOperativoWhereInput>>,
  OR?: Maybe<Array<PeriodoOperativoWhereInput>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  yearEnd?: Maybe<Scalars['Int']>,
  yearEnd_gt?: Maybe<Scalars['Int']>,
  yearEnd_gte?: Maybe<Scalars['Int']>,
  yearEnd_in?: Maybe<Array<Scalars['Int']>>,
  yearEnd_lt?: Maybe<Scalars['Int']>,
  yearEnd_lte?: Maybe<Scalars['Int']>,
  yearEnd_not?: Maybe<Scalars['Int']>,
  yearEnd_not_in?: Maybe<Array<Scalars['Int']>>,
  yearStart?: Maybe<Scalars['Int']>,
  yearStart_gt?: Maybe<Scalars['Int']>,
  yearStart_gte?: Maybe<Scalars['Int']>,
  yearStart_in?: Maybe<Array<Scalars['Int']>>,
  yearStart_lt?: Maybe<Scalars['Int']>,
  yearStart_lte?: Maybe<Scalars['Int']>,
  yearStart_not?: Maybe<Scalars['Int']>,
  yearStart_not_in?: Maybe<Array<Scalars['Int']>>,
};

export type PeriodoOperativoWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Product = {
   __typename?: 'Product',
  category: ProductCategory,
  content?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  description: Scalars['String'],
  discounts?: Maybe<Array<Discount>>,
  id: Scalars['ID'],
  imageURLs: Array<Scalars['String']>,
  name: Scalars['String'],
  orders?: Maybe<Array<Item>>,
  unitPrice: Scalars['Float'],
  updatedAt: Scalars['DateTime'],
};


export type ProductDiscountsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<DiscountOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<DiscountWhereInput>
};


export type ProductOrdersArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ItemOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ItemWhereInput>
};

export type ProductCategory = {
   __typename?: 'ProductCategory',
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  name: Scalars['String'],
  products?: Maybe<Array<Product>>,
  updatedAt: Scalars['DateTime'],
};


export type ProductCategoryProductsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ProductOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ProductWhereInput>
};

export type ProductCategoryConnection = {
   __typename?: 'ProductCategoryConnection',
  aggregate: AggregateProductCategory,
  edges: Array<ProductCategoryEdge>,
  pageInfo: PageInfo,
};

export type ProductCategoryCreateInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  products?: Maybe<ProductCreateManyWithoutCategoryInput>,
};

export type ProductCategoryCreateOneWithoutProductsInput = {
  connect?: Maybe<ProductCategoryWhereUniqueInput>,
  create?: Maybe<ProductCategoryCreateWithoutProductsInput>,
};

export type ProductCategoryCreateWithoutProductsInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
};

export type ProductCategoryEdge = {
   __typename?: 'ProductCategoryEdge',
  cursor: Scalars['String'],
  node: ProductCategory,
};

export enum ProductCategoryOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ProductCategoryUpdateInput = {
  name?: Maybe<Scalars['String']>,
  products?: Maybe<ProductUpdateManyWithoutCategoryInput>,
};

export type ProductCategoryUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
};

export type ProductCategoryUpdateOneRequiredWithoutProductsInput = {
  connect?: Maybe<ProductCategoryWhereUniqueInput>,
  create?: Maybe<ProductCategoryCreateWithoutProductsInput>,
  update?: Maybe<ProductCategoryUpdateWithoutProductsDataInput>,
  upsert?: Maybe<ProductCategoryUpsertWithoutProductsInput>,
};

export type ProductCategoryUpdateWithoutProductsDataInput = {
  name?: Maybe<Scalars['String']>,
};

export type ProductCategoryUpsertWithoutProductsInput = {
  create: ProductCategoryCreateWithoutProductsInput,
  update: ProductCategoryUpdateWithoutProductsDataInput,
};

export type ProductCategoryWhereInput = {
  AND?: Maybe<Array<ProductCategoryWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<ProductCategoryWhereInput>>,
  OR?: Maybe<Array<ProductCategoryWhereInput>>,
  products_every?: Maybe<ProductWhereInput>,
  products_none?: Maybe<ProductWhereInput>,
  products_some?: Maybe<ProductWhereInput>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type ProductCategoryWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
};

export type ProductConnection = {
   __typename?: 'ProductConnection',
  aggregate: AggregateProduct,
  edges: Array<ProductEdge>,
  pageInfo: PageInfo,
};

export type ProductCreateimageUrLsInput = {
  set?: Maybe<Array<Scalars['String']>>,
};

export type ProductCreateInput = {
  category: ProductCategoryCreateOneWithoutProductsInput,
  content?: Maybe<Scalars['String']>,
  description: Scalars['String'],
  discounts?: Maybe<DiscountCreateManyWithoutProductInput>,
  id?: Maybe<Scalars['ID']>,
  imageURLs?: Maybe<ProductCreateimageUrLsInput>,
  name: Scalars['String'],
  orders?: Maybe<ItemCreateManyWithoutProductInput>,
  unitPrice: Scalars['Float'],
};

export type ProductCreateManyWithoutCategoryInput = {
  connect?: Maybe<Array<ProductWhereUniqueInput>>,
  create?: Maybe<Array<ProductCreateWithoutCategoryInput>>,
};

export type ProductCreateOneWithoutDiscountsInput = {
  connect?: Maybe<ProductWhereUniqueInput>,
  create?: Maybe<ProductCreateWithoutDiscountsInput>,
};

export type ProductCreateOneWithoutOrdersInput = {
  connect?: Maybe<ProductWhereUniqueInput>,
  create?: Maybe<ProductCreateWithoutOrdersInput>,
};

export type ProductCreateWithoutCategoryInput = {
  content?: Maybe<Scalars['String']>,
  description: Scalars['String'],
  discounts?: Maybe<DiscountCreateManyWithoutProductInput>,
  id?: Maybe<Scalars['ID']>,
  imageURLs?: Maybe<ProductCreateimageUrLsInput>,
  name: Scalars['String'],
  orders?: Maybe<ItemCreateManyWithoutProductInput>,
  unitPrice: Scalars['Float'],
};

export type ProductCreateWithoutDiscountsInput = {
  category: ProductCategoryCreateOneWithoutProductsInput,
  content?: Maybe<Scalars['String']>,
  description: Scalars['String'],
  id?: Maybe<Scalars['ID']>,
  imageURLs?: Maybe<ProductCreateimageUrLsInput>,
  name: Scalars['String'],
  orders?: Maybe<ItemCreateManyWithoutProductInput>,
  unitPrice: Scalars['Float'],
};

export type ProductCreateWithoutOrdersInput = {
  category: ProductCategoryCreateOneWithoutProductsInput,
  content?: Maybe<Scalars['String']>,
  description: Scalars['String'],
  discounts?: Maybe<DiscountCreateManyWithoutProductInput>,
  id?: Maybe<Scalars['ID']>,
  imageURLs?: Maybe<ProductCreateimageUrLsInput>,
  name: Scalars['String'],
  unitPrice: Scalars['Float'],
};

export type ProductEdge = {
   __typename?: 'ProductEdge',
  cursor: Scalars['String'],
  node: Product,
};

export enum ProductOrderByInput {
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UnitPriceAsc = 'unitPrice_ASC',
  UnitPriceDesc = 'unitPrice_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ProductScalarWhereInput = {
  AND?: Maybe<Array<ProductScalarWhereInput>>,
  content?: Maybe<Scalars['String']>,
  content_contains?: Maybe<Scalars['String']>,
  content_ends_with?: Maybe<Scalars['String']>,
  content_gt?: Maybe<Scalars['String']>,
  content_gte?: Maybe<Scalars['String']>,
  content_in?: Maybe<Array<Scalars['String']>>,
  content_lt?: Maybe<Scalars['String']>,
  content_lte?: Maybe<Scalars['String']>,
  content_not?: Maybe<Scalars['String']>,
  content_not_contains?: Maybe<Scalars['String']>,
  content_not_ends_with?: Maybe<Scalars['String']>,
  content_not_in?: Maybe<Array<Scalars['String']>>,
  content_not_starts_with?: Maybe<Scalars['String']>,
  content_starts_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  description?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<ProductScalarWhereInput>>,
  OR?: Maybe<Array<ProductScalarWhereInput>>,
  unitPrice?: Maybe<Scalars['Float']>,
  unitPrice_gt?: Maybe<Scalars['Float']>,
  unitPrice_gte?: Maybe<Scalars['Float']>,
  unitPrice_in?: Maybe<Array<Scalars['Float']>>,
  unitPrice_lt?: Maybe<Scalars['Float']>,
  unitPrice_lte?: Maybe<Scalars['Float']>,
  unitPrice_not?: Maybe<Scalars['Float']>,
  unitPrice_not_in?: Maybe<Array<Scalars['Float']>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type ProductUpdateimageUrLsInput = {
  set?: Maybe<Array<Scalars['String']>>,
};

export type ProductUpdateInput = {
  category?: Maybe<ProductCategoryUpdateOneRequiredWithoutProductsInput>,
  content?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  discounts?: Maybe<DiscountUpdateManyWithoutProductInput>,
  imageURLs?: Maybe<ProductUpdateimageUrLsInput>,
  name?: Maybe<Scalars['String']>,
  orders?: Maybe<ItemUpdateManyWithoutProductInput>,
  unitPrice?: Maybe<Scalars['Float']>,
};

export type ProductUpdateManyDataInput = {
  content?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  imageURLs?: Maybe<ProductUpdateimageUrLsInput>,
  name?: Maybe<Scalars['String']>,
  unitPrice?: Maybe<Scalars['Float']>,
};

export type ProductUpdateManyMutationInput = {
  content?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  imageURLs?: Maybe<ProductUpdateimageUrLsInput>,
  name?: Maybe<Scalars['String']>,
  unitPrice?: Maybe<Scalars['Float']>,
};

export type ProductUpdateManyWithoutCategoryInput = {
  connect?: Maybe<Array<ProductWhereUniqueInput>>,
  create?: Maybe<Array<ProductCreateWithoutCategoryInput>>,
  delete?: Maybe<Array<ProductWhereUniqueInput>>,
  deleteMany?: Maybe<Array<ProductScalarWhereInput>>,
  disconnect?: Maybe<Array<ProductWhereUniqueInput>>,
  set?: Maybe<Array<ProductWhereUniqueInput>>,
  update?: Maybe<Array<ProductUpdateWithWhereUniqueWithoutCategoryInput>>,
  updateMany?: Maybe<Array<ProductUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<ProductUpsertWithWhereUniqueWithoutCategoryInput>>,
};

export type ProductUpdateManyWithWhereNestedInput = {
  data: ProductUpdateManyDataInput,
  where: ProductScalarWhereInput,
};

export type ProductUpdateOneRequiredWithoutDiscountsInput = {
  connect?: Maybe<ProductWhereUniqueInput>,
  create?: Maybe<ProductCreateWithoutDiscountsInput>,
  update?: Maybe<ProductUpdateWithoutDiscountsDataInput>,
  upsert?: Maybe<ProductUpsertWithoutDiscountsInput>,
};

export type ProductUpdateOneRequiredWithoutOrdersInput = {
  connect?: Maybe<ProductWhereUniqueInput>,
  create?: Maybe<ProductCreateWithoutOrdersInput>,
  update?: Maybe<ProductUpdateWithoutOrdersDataInput>,
  upsert?: Maybe<ProductUpsertWithoutOrdersInput>,
};

export type ProductUpdateWithoutCategoryDataInput = {
  content?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  discounts?: Maybe<DiscountUpdateManyWithoutProductInput>,
  imageURLs?: Maybe<ProductUpdateimageUrLsInput>,
  name?: Maybe<Scalars['String']>,
  orders?: Maybe<ItemUpdateManyWithoutProductInput>,
  unitPrice?: Maybe<Scalars['Float']>,
};

export type ProductUpdateWithoutDiscountsDataInput = {
  category?: Maybe<ProductCategoryUpdateOneRequiredWithoutProductsInput>,
  content?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  imageURLs?: Maybe<ProductUpdateimageUrLsInput>,
  name?: Maybe<Scalars['String']>,
  orders?: Maybe<ItemUpdateManyWithoutProductInput>,
  unitPrice?: Maybe<Scalars['Float']>,
};

export type ProductUpdateWithoutOrdersDataInput = {
  category?: Maybe<ProductCategoryUpdateOneRequiredWithoutProductsInput>,
  content?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  discounts?: Maybe<DiscountUpdateManyWithoutProductInput>,
  imageURLs?: Maybe<ProductUpdateimageUrLsInput>,
  name?: Maybe<Scalars['String']>,
  unitPrice?: Maybe<Scalars['Float']>,
};

export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
  data: ProductUpdateWithoutCategoryDataInput,
  where: ProductWhereUniqueInput,
};

export type ProductUpsertWithoutDiscountsInput = {
  create: ProductCreateWithoutDiscountsInput,
  update: ProductUpdateWithoutDiscountsDataInput,
};

export type ProductUpsertWithoutOrdersInput = {
  create: ProductCreateWithoutOrdersInput,
  update: ProductUpdateWithoutOrdersDataInput,
};

export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
  create: ProductCreateWithoutCategoryInput,
  update: ProductUpdateWithoutCategoryDataInput,
  where: ProductWhereUniqueInput,
};

export type ProductWhereInput = {
  AND?: Maybe<Array<ProductWhereInput>>,
  category?: Maybe<ProductCategoryWhereInput>,
  content?: Maybe<Scalars['String']>,
  content_contains?: Maybe<Scalars['String']>,
  content_ends_with?: Maybe<Scalars['String']>,
  content_gt?: Maybe<Scalars['String']>,
  content_gte?: Maybe<Scalars['String']>,
  content_in?: Maybe<Array<Scalars['String']>>,
  content_lt?: Maybe<Scalars['String']>,
  content_lte?: Maybe<Scalars['String']>,
  content_not?: Maybe<Scalars['String']>,
  content_not_contains?: Maybe<Scalars['String']>,
  content_not_ends_with?: Maybe<Scalars['String']>,
  content_not_in?: Maybe<Array<Scalars['String']>>,
  content_not_starts_with?: Maybe<Scalars['String']>,
  content_starts_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  description?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  discounts_every?: Maybe<DiscountWhereInput>,
  discounts_none?: Maybe<DiscountWhereInput>,
  discounts_some?: Maybe<DiscountWhereInput>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<ProductWhereInput>>,
  OR?: Maybe<Array<ProductWhereInput>>,
  orders_every?: Maybe<ItemWhereInput>,
  orders_none?: Maybe<ItemWhereInput>,
  orders_some?: Maybe<ItemWhereInput>,
  unitPrice?: Maybe<Scalars['Float']>,
  unitPrice_gt?: Maybe<Scalars['Float']>,
  unitPrice_gte?: Maybe<Scalars['Float']>,
  unitPrice_in?: Maybe<Array<Scalars['Float']>>,
  unitPrice_lt?: Maybe<Scalars['Float']>,
  unitPrice_lte?: Maybe<Scalars['Float']>,
  unitPrice_not?: Maybe<Scalars['Float']>,
  unitPrice_not_in?: Maybe<Array<Scalars['Float']>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type ProductWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type ProfesoresLecciones = {
   __typename?: 'ProfesoresLecciones',
  leccion: Leccion,
  profesor: User,
};

export type ProfesoresLeccionesConnection = {
   __typename?: 'ProfesoresLeccionesConnection',
  aggregate: AggregateProfesoresLecciones,
  edges: Array<ProfesoresLeccionesEdge>,
  pageInfo: PageInfo,
};

export type ProfesoresLeccionesCreateInput = {
  leccion: LeccionCreateOneInput,
  profesor: UserCreateOneInput,
};

export type ProfesoresLeccionesEdge = {
   __typename?: 'ProfesoresLeccionesEdge',
  cursor: Scalars['String'],
  node: ProfesoresLecciones,
};

export enum ProfesoresLeccionesOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ProfesoresLeccionesWhereInput = {
  AND?: Maybe<Array<ProfesoresLeccionesWhereInput>>,
  leccion?: Maybe<LeccionWhereInput>,
  NOT?: Maybe<Array<ProfesoresLeccionesWhereInput>>,
  OR?: Maybe<Array<ProfesoresLeccionesWhereInput>>,
  profesor?: Maybe<UserWhereInput>,
};

export type Query = {
   __typename?: 'Query',
  address?: Maybe<Address>,
  addresses: Array<Address>,
  addressesConnection: AddressConnection,
  asignatura?: Maybe<Asignatura>,
  asignaturas: Array<Asignatura>,
  asignaturasConnection: AsignaturaConnection,
  asistencia?: Maybe<Asistencia>,
  asistencias: Array<Asistencia>,
  asistenciasConnection: AsistenciaConnection,
  convocatoriaExamen?: Maybe<ConvocatoriaExamen>,
  convocatoriaExamens: Array<ConvocatoriaExamen>,
  convocatoriaExamensConnection: ConvocatoriaExamenConnection,
  curso?: Maybe<Curso>,
  cursoes: Array<Curso>,
  cursoesConnection: CursoConnection,
  department?: Maybe<Department>,
  departments: Array<Department>,
  departmentsConnection: DepartmentConnection,
  desdoble?: Maybe<Desdoble>,
  desdobles: Array<Desdoble>,
  desdoblesConnection: DesdobleConnection,
  device?: Maybe<Device>,
  devices: Array<Device>,
  devicesConnection: DeviceConnection,
  discount?: Maybe<Discount>,
  discountRequest?: Maybe<DiscountRequest>,
  discountRequests: Array<DiscountRequest>,
  discountRequestsConnection: DiscountRequestConnection,
  discounts: Array<Discount>,
  discountsConnection: DiscountConnection,
  estudio?: Maybe<Estudio>,
  estudios: Array<Estudio>,
  estudiosConnection: EstudioConnection,
  event?: Maybe<Event>,
  events: Array<Event>,
  eventsConnection: EventConnection,
  examen?: Maybe<Examen>,
  examens: Array<Examen>,
  examensConnection: ExamenConnection,
  feed: Array<News>,
  filterNews: Array<News>,
  item?: Maybe<Item>,
  items: Array<Item>,
  itemsConnection: ItemConnection,
  leccion?: Maybe<Leccion>,
  leccionEspaciosPlanificadoses: Array<LeccionEspaciosPlanificados>,
  leccionEspaciosPlanificadosesConnection: LeccionEspaciosPlanificadosConnection,
  leccions: Array<Leccion>,
  leccionsConnection: LeccionConnection,
  leccionSesioneses: Array<LeccionSesiones>,
  leccionSesionesesConnection: LeccionSesionesConnection,
  matricula?: Maybe<Matricula>,
  matriculas: Array<Matricula>,
  matriculasConnection: MatriculaConnection,
  me: User,
  mencion?: Maybe<Mencion>,
  mencions: Array<Mencion>,
  mencionsConnection: MencionConnection,
  news?: Maybe<News>,
  newses: Array<News>,
  newsesConnection: NewsConnection,
  officialDocument?: Maybe<OfficialDocument>,
  officialDocuments: Array<OfficialDocument>,
  officialDocumentsConnection: OfficialDocumentConnection,
  order?: Maybe<Order>,
  orders: Array<Order>,
  ordersConnection: OrderConnection,
  periodoOperativo?: Maybe<PeriodoOperativo>,
  periodoOperativoes: Array<PeriodoOperativo>,
  periodoOperativoesConnection: PeriodoOperativoConnection,
  product?: Maybe<Product>,
  productCategories: Array<ProductCategory>,
  productCategoriesConnection: ProductCategoryConnection,
  productCategory?: Maybe<ProductCategory>,
  products: Array<Product>,
  productsConnection: ProductConnection,
  profesoresLeccioneses: Array<ProfesoresLecciones>,
  profesoresLeccionesesConnection: ProfesoresLeccionesConnection,
  ratio?: Maybe<Ratio>,
  ratios: Array<Ratio>,
  ratiosConnection: RatioConnection,
  recurrencia?: Maybe<Recurrencia>,
  recurrencias: Array<Recurrencia>,
  recurrenciasConnection: RecurrenciaConnection,
  role?: Maybe<Role>,
  roles: Array<Role>,
  rolesConnection: RoleConnection,
  sesion?: Maybe<Sesion>,
  sesions: Array<Sesion>,
  sesionsConnection: SesionConnection,
  socialLink?: Maybe<SocialLink>,
  socialLinks: Array<SocialLink>,
  socialLinksConnection: SocialLinkConnection,
  socialNetwork?: Maybe<SocialNetwork>,
  socialNetworks: Array<SocialNetwork>,
  socialNetworksConnection: SocialNetworkConnection,
  space?: Maybe<Space>,
  spaces: Array<Space>,
  spacesConnection: SpaceConnection,
  titulacion?: Maybe<Titulacion>,
  titulacions: Array<Titulacion>,
  titulacionsConnection: TitulacionConnection,
  transaction?: Maybe<Transaction>,
  transactions: Array<Transaction>,
  transactionsConnection: TransactionConnection,
  user?: Maybe<User>,
  userRoleses: Array<UserRoles>,
  userRolesesConnection: UserRolesConnection,
  users: Array<User>,
  usersConnection: UserConnection,
  venue?: Maybe<Venue>,
  venues: Array<Venue>,
  venuesConnection: VenueConnection,
};


export type QueryAddressArgs = {
  where: AddressWhereUniqueInput
};


export type QueryAddressesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<AddressOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<AddressWhereInput>
};


export type QueryAddressesConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<AddressOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<AddressWhereInput>
};


export type QueryAsignaturaArgs = {
  where: AsignaturaWhereUniqueInput
};


export type QueryAsignaturasArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<AsignaturaOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<AsignaturaWhereInput>
};


export type QueryAsignaturasConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<AsignaturaOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<AsignaturaWhereInput>
};


export type QueryAsistenciaArgs = {
  where: AsistenciaWhereUniqueInput
};


export type QueryAsistenciasArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<AsistenciaOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<AsistenciaWhereInput>
};


export type QueryAsistenciasConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<AsistenciaOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<AsistenciaWhereInput>
};


export type QueryConvocatoriaExamenArgs = {
  where: ConvocatoriaExamenWhereUniqueInput
};


export type QueryConvocatoriaExamensArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ConvocatoriaExamenOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ConvocatoriaExamenWhereInput>
};


export type QueryConvocatoriaExamensConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ConvocatoriaExamenOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ConvocatoriaExamenWhereInput>
};


export type QueryCursoArgs = {
  where: CursoWhereUniqueInput
};


export type QueryCursoesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<CursoOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<CursoWhereInput>
};


export type QueryCursoesConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<CursoOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<CursoWhereInput>
};


export type QueryDepartmentArgs = {
  where: DepartmentWhereUniqueInput
};


export type QueryDepartmentsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<DepartmentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<DepartmentWhereInput>
};


export type QueryDepartmentsConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<DepartmentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<DepartmentWhereInput>
};


export type QueryDesdobleArgs = {
  where: DesdobleWhereUniqueInput
};


export type QueryDesdoblesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<DesdobleOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<DesdobleWhereInput>
};


export type QueryDesdoblesConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<DesdobleOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<DesdobleWhereInput>
};


export type QueryDeviceArgs = {
  where: DeviceWhereUniqueInput
};


export type QueryDevicesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<DeviceOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<DeviceWhereInput>
};


export type QueryDevicesConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<DeviceOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<DeviceWhereInput>
};


export type QueryDiscountArgs = {
  where: DiscountWhereUniqueInput
};


export type QueryDiscountRequestArgs = {
  where: DiscountRequestWhereUniqueInput
};


export type QueryDiscountRequestsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<DiscountRequestOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<DiscountRequestWhereInput>
};


export type QueryDiscountRequestsConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<DiscountRequestOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<DiscountRequestWhereInput>
};


export type QueryDiscountsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<DiscountOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<DiscountWhereInput>
};


export type QueryDiscountsConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<DiscountOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<DiscountWhereInput>
};


export type QueryEstudioArgs = {
  where: EstudioWhereUniqueInput
};


export type QueryEstudiosArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<EstudioOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<EstudioWhereInput>
};


export type QueryEstudiosConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<EstudioOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<EstudioWhereInput>
};


export type QueryEventArgs = {
  where: EventWhereUniqueInput
};


export type QueryEventsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<EventOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<EventWhereInput>
};


export type QueryEventsConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<EventOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<EventWhereInput>
};


export type QueryExamenArgs = {
  where: ExamenWhereUniqueInput
};


export type QueryExamensArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ExamenOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ExamenWhereInput>
};


export type QueryExamensConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ExamenOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ExamenWhereInput>
};


export type QueryFilterNewsArgs = {
  searchString?: Maybe<Scalars['String']>
};


export type QueryItemArgs = {
  where: ItemWhereUniqueInput
};


export type QueryItemsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ItemOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ItemWhereInput>
};


export type QueryItemsConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ItemOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ItemWhereInput>
};


export type QueryLeccionArgs = {
  where: LeccionWhereUniqueInput
};


export type QueryLeccionEspaciosPlanificadosesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<LeccionEspaciosPlanificadosOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<LeccionEspaciosPlanificadosWhereInput>
};


export type QueryLeccionEspaciosPlanificadosesConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<LeccionEspaciosPlanificadosOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<LeccionEspaciosPlanificadosWhereInput>
};


export type QueryLeccionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<LeccionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<LeccionWhereInput>
};


export type QueryLeccionsConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<LeccionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<LeccionWhereInput>
};


export type QueryLeccionSesionesesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<LeccionSesionesOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<LeccionSesionesWhereInput>
};


export type QueryLeccionSesionesesConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<LeccionSesionesOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<LeccionSesionesWhereInput>
};


export type QueryMatriculaArgs = {
  where: MatriculaWhereUniqueInput
};


export type QueryMatriculasArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<MatriculaOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<MatriculaWhereInput>
};


export type QueryMatriculasConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<MatriculaOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<MatriculaWhereInput>
};


export type QueryMencionArgs = {
  where: MencionWhereUniqueInput
};


export type QueryMencionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<MencionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<MencionWhereInput>
};


export type QueryMencionsConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<MencionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<MencionWhereInput>
};


export type QueryNewsArgs = {
  id: Scalars['ID']
};


export type QueryNewsesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<NewsOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<NewsWhereInput>
};


export type QueryNewsesConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<NewsOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<NewsWhereInput>
};


export type QueryOfficialDocumentArgs = {
  where: OfficialDocumentWhereUniqueInput
};


export type QueryOfficialDocumentsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<OfficialDocumentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<OfficialDocumentWhereInput>
};


export type QueryOfficialDocumentsConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<OfficialDocumentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<OfficialDocumentWhereInput>
};


export type QueryOrderArgs = {
  where: OrderWhereUniqueInput
};


export type QueryOrdersArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<OrderOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<OrderWhereInput>
};


export type QueryOrdersConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<OrderOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<OrderWhereInput>
};


export type QueryPeriodoOperativoArgs = {
  where: PeriodoOperativoWhereUniqueInput
};


export type QueryPeriodoOperativoesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<PeriodoOperativoOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<PeriodoOperativoWhereInput>
};


export type QueryPeriodoOperativoesConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<PeriodoOperativoOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<PeriodoOperativoWhereInput>
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput
};


export type QueryProductCategoriesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ProductCategoryOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ProductCategoryWhereInput>
};


export type QueryProductCategoriesConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ProductCategoryOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ProductCategoryWhereInput>
};


export type QueryProductCategoryArgs = {
  where: ProductCategoryWhereUniqueInput
};


export type QueryProductsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ProductOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ProductWhereInput>
};


export type QueryProductsConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ProductOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ProductWhereInput>
};


export type QueryProfesoresLeccionesesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ProfesoresLeccionesOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ProfesoresLeccionesWhereInput>
};


export type QueryProfesoresLeccionesesConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ProfesoresLeccionesOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ProfesoresLeccionesWhereInput>
};


export type QueryRatioArgs = {
  where: RatioWhereUniqueInput
};


export type QueryRatiosArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<RatioOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<RatioWhereInput>
};


export type QueryRatiosConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<RatioOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<RatioWhereInput>
};


export type QueryRecurrenciaArgs = {
  where: RecurrenciaWhereUniqueInput
};


export type QueryRecurrenciasArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<RecurrenciaOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<RecurrenciaWhereInput>
};


export type QueryRecurrenciasConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<RecurrenciaOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<RecurrenciaWhereInput>
};


export type QueryRoleArgs = {
  where: RoleWhereUniqueInput
};


export type QueryRolesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<RoleOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<RoleWhereInput>
};


export type QueryRolesConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<RoleOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<RoleWhereInput>
};


export type QuerySesionArgs = {
  where: SesionWhereUniqueInput
};


export type QuerySesionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<SesionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<SesionWhereInput>
};


export type QuerySesionsConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<SesionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<SesionWhereInput>
};


export type QuerySocialLinkArgs = {
  where: SocialLinkWhereUniqueInput
};


export type QuerySocialLinksArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<SocialLinkOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<SocialLinkWhereInput>
};


export type QuerySocialLinksConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<SocialLinkOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<SocialLinkWhereInput>
};


export type QuerySocialNetworkArgs = {
  where: SocialNetworkWhereUniqueInput
};


export type QuerySocialNetworksArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<SocialNetworkOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<SocialNetworkWhereInput>
};


export type QuerySocialNetworksConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<SocialNetworkOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<SocialNetworkWhereInput>
};


export type QuerySpaceArgs = {
  where: SpaceWhereUniqueInput
};


export type QuerySpacesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<SpaceOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<SpaceWhereInput>
};


export type QuerySpacesConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<SpaceOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<SpaceWhereInput>
};


export type QueryTitulacionArgs = {
  where: TitulacionWhereUniqueInput
};


export type QueryTitulacionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<TitulacionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<TitulacionWhereInput>
};


export type QueryTitulacionsConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<TitulacionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<TitulacionWhereInput>
};


export type QueryTransactionArgs = {
  where: TransactionWhereUniqueInput
};


export type QueryTransactionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<TransactionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<TransactionWhereInput>
};


export type QueryTransactionsConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<TransactionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<TransactionWhereInput>
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput
};


export type QueryUserRolesesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<UserRolesOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<UserRolesWhereInput>
};


export type QueryUserRolesesConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<UserRolesOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<UserRolesWhereInput>
};


export type QueryUsersArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<UserWhereInput>
};


export type QueryUsersConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<UserWhereInput>
};


export type QueryVenueArgs = {
  where: VenueWhereUniqueInput
};


export type QueryVenuesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<VenueOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<VenueWhereInput>
};


export type QueryVenuesConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<VenueOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<VenueWhereInput>
};

export type Ratio = {
   __typename?: 'Ratio',
  asignaturas?: Maybe<Array<Asignatura>>,
  id: Scalars['ID'],
  multiplier: Scalars['Int'],
  name: Scalars['String'],
};


export type RatioAsignaturasArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<AsignaturaOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<AsignaturaWhereInput>
};

export type RatioConnection = {
   __typename?: 'RatioConnection',
  aggregate: AggregateRatio,
  edges: Array<RatioEdge>,
  pageInfo: PageInfo,
};

export type RatioCreateInput = {
  asignaturas?: Maybe<AsignaturaCreateManyWithoutRatioInput>,
  id?: Maybe<Scalars['ID']>,
  multiplier?: Maybe<Scalars['Int']>,
  name: Scalars['String'],
};

export type RatioCreateOneWithoutAsignaturasInput = {
  connect?: Maybe<RatioWhereUniqueInput>,
  create?: Maybe<RatioCreateWithoutAsignaturasInput>,
};

export type RatioCreateWithoutAsignaturasInput = {
  id?: Maybe<Scalars['ID']>,
  multiplier?: Maybe<Scalars['Int']>,
  name: Scalars['String'],
};

export type RatioEdge = {
   __typename?: 'RatioEdge',
  cursor: Scalars['String'],
  node: Ratio,
};

export enum RatioOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MultiplierAsc = 'multiplier_ASC',
  MultiplierDesc = 'multiplier_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type RatioUpdateInput = {
  asignaturas?: Maybe<AsignaturaUpdateManyWithoutRatioInput>,
  multiplier?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type RatioUpdateManyMutationInput = {
  multiplier?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type RatioUpdateOneRequiredWithoutAsignaturasInput = {
  connect?: Maybe<RatioWhereUniqueInput>,
  create?: Maybe<RatioCreateWithoutAsignaturasInput>,
  update?: Maybe<RatioUpdateWithoutAsignaturasDataInput>,
  upsert?: Maybe<RatioUpsertWithoutAsignaturasInput>,
};

export type RatioUpdateWithoutAsignaturasDataInput = {
  multiplier?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type RatioUpsertWithoutAsignaturasInput = {
  create: RatioCreateWithoutAsignaturasInput,
  update: RatioUpdateWithoutAsignaturasDataInput,
};

export type RatioWhereInput = {
  AND?: Maybe<Array<RatioWhereInput>>,
  asignaturas_every?: Maybe<AsignaturaWhereInput>,
  asignaturas_none?: Maybe<AsignaturaWhereInput>,
  asignaturas_some?: Maybe<AsignaturaWhereInput>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  multiplier?: Maybe<Scalars['Int']>,
  multiplier_gt?: Maybe<Scalars['Int']>,
  multiplier_gte?: Maybe<Scalars['Int']>,
  multiplier_in?: Maybe<Array<Scalars['Int']>>,
  multiplier_lt?: Maybe<Scalars['Int']>,
  multiplier_lte?: Maybe<Scalars['Int']>,
  multiplier_not?: Maybe<Scalars['Int']>,
  multiplier_not_in?: Maybe<Array<Scalars['Int']>>,
  name?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<RatioWhereInput>>,
  OR?: Maybe<Array<RatioWhereInput>>,
};

export type RatioWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
};

export type Recurrencia = {
   __typename?: 'Recurrencia',
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  leccion: Leccion,
  plannedSpaces?: Maybe<Array<Space>>,
  timeEnd: Scalars['String'],
  timeStart: Scalars['String'],
  updatedAt: Scalars['DateTime'],
  weekday: WeekDay,
};


export type RecurrenciaPlannedSpacesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<SpaceOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<SpaceWhereInput>
};

export type RecurrenciaConnection = {
   __typename?: 'RecurrenciaConnection',
  aggregate: AggregateRecurrencia,
  edges: Array<RecurrenciaEdge>,
  pageInfo: PageInfo,
};

export type RecurrenciaCreateInput = {
  id?: Maybe<Scalars['ID']>,
  leccion: LeccionCreateOneWithoutRecurrenciasInput,
  plannedSpaces?: Maybe<SpaceCreateManyWithoutLeccionesPlanificadasInput>,
  timeEnd?: Maybe<Scalars['String']>,
  timeStart?: Maybe<Scalars['String']>,
  weekday?: Maybe<WeekDay>,
};

export type RecurrenciaCreateManyWithoutLeccionInput = {
  connect?: Maybe<Array<RecurrenciaWhereUniqueInput>>,
  create?: Maybe<Array<RecurrenciaCreateWithoutLeccionInput>>,
};

export type RecurrenciaCreateManyWithoutPlannedSpacesInput = {
  connect?: Maybe<Array<RecurrenciaWhereUniqueInput>>,
  create?: Maybe<Array<RecurrenciaCreateWithoutPlannedSpacesInput>>,
};

export type RecurrenciaCreateOneInput = {
  connect?: Maybe<RecurrenciaWhereUniqueInput>,
  create?: Maybe<RecurrenciaCreateInput>,
};

export type RecurrenciaCreateWithoutLeccionInput = {
  id?: Maybe<Scalars['ID']>,
  plannedSpaces?: Maybe<SpaceCreateManyWithoutLeccionesPlanificadasInput>,
  timeEnd?: Maybe<Scalars['String']>,
  timeStart?: Maybe<Scalars['String']>,
  weekday?: Maybe<WeekDay>,
};

export type RecurrenciaCreateWithoutPlannedSpacesInput = {
  id?: Maybe<Scalars['ID']>,
  leccion: LeccionCreateOneWithoutRecurrenciasInput,
  timeEnd?: Maybe<Scalars['String']>,
  timeStart?: Maybe<Scalars['String']>,
  weekday?: Maybe<WeekDay>,
};

export type RecurrenciaEdge = {
   __typename?: 'RecurrenciaEdge',
  cursor: Scalars['String'],
  node: Recurrencia,
};

export enum RecurrenciaOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TimeEndAsc = 'timeEnd_ASC',
  TimeEndDesc = 'timeEnd_DESC',
  TimeStartAsc = 'timeStart_ASC',
  TimeStartDesc = 'timeStart_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WeekdayAsc = 'weekday_ASC',
  WeekdayDesc = 'weekday_DESC'
}

export type RecurrenciaScalarWhereInput = {
  AND?: Maybe<Array<RecurrenciaScalarWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  NOT?: Maybe<Array<RecurrenciaScalarWhereInput>>,
  OR?: Maybe<Array<RecurrenciaScalarWhereInput>>,
  timeEnd?: Maybe<Scalars['String']>,
  timeEnd_contains?: Maybe<Scalars['String']>,
  timeEnd_ends_with?: Maybe<Scalars['String']>,
  timeEnd_gt?: Maybe<Scalars['String']>,
  timeEnd_gte?: Maybe<Scalars['String']>,
  timeEnd_in?: Maybe<Array<Scalars['String']>>,
  timeEnd_lt?: Maybe<Scalars['String']>,
  timeEnd_lte?: Maybe<Scalars['String']>,
  timeEnd_not?: Maybe<Scalars['String']>,
  timeEnd_not_contains?: Maybe<Scalars['String']>,
  timeEnd_not_ends_with?: Maybe<Scalars['String']>,
  timeEnd_not_in?: Maybe<Array<Scalars['String']>>,
  timeEnd_not_starts_with?: Maybe<Scalars['String']>,
  timeEnd_starts_with?: Maybe<Scalars['String']>,
  timeStart?: Maybe<Scalars['String']>,
  timeStart_contains?: Maybe<Scalars['String']>,
  timeStart_ends_with?: Maybe<Scalars['String']>,
  timeStart_gt?: Maybe<Scalars['String']>,
  timeStart_gte?: Maybe<Scalars['String']>,
  timeStart_in?: Maybe<Array<Scalars['String']>>,
  timeStart_lt?: Maybe<Scalars['String']>,
  timeStart_lte?: Maybe<Scalars['String']>,
  timeStart_not?: Maybe<Scalars['String']>,
  timeStart_not_contains?: Maybe<Scalars['String']>,
  timeStart_not_ends_with?: Maybe<Scalars['String']>,
  timeStart_not_in?: Maybe<Array<Scalars['String']>>,
  timeStart_not_starts_with?: Maybe<Scalars['String']>,
  timeStart_starts_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  weekday?: Maybe<WeekDay>,
  weekday_in?: Maybe<Array<WeekDay>>,
  weekday_not?: Maybe<WeekDay>,
  weekday_not_in?: Maybe<Array<WeekDay>>,
};

export type RecurrenciaUpdateInput = {
  leccion?: Maybe<LeccionUpdateOneRequiredWithoutRecurrenciasInput>,
  plannedSpaces?: Maybe<SpaceUpdateManyWithoutLeccionesPlanificadasInput>,
  timeEnd?: Maybe<Scalars['String']>,
  timeStart?: Maybe<Scalars['String']>,
  weekday?: Maybe<WeekDay>,
};

export type RecurrenciaUpdateManyDataInput = {
  timeEnd?: Maybe<Scalars['String']>,
  timeStart?: Maybe<Scalars['String']>,
  weekday?: Maybe<WeekDay>,
};

export type RecurrenciaUpdateManyMutationInput = {
  timeEnd?: Maybe<Scalars['String']>,
  timeStart?: Maybe<Scalars['String']>,
  weekday?: Maybe<WeekDay>,
};

export type RecurrenciaUpdateManyWithoutLeccionInput = {
  connect?: Maybe<Array<RecurrenciaWhereUniqueInput>>,
  create?: Maybe<Array<RecurrenciaCreateWithoutLeccionInput>>,
  delete?: Maybe<Array<RecurrenciaWhereUniqueInput>>,
  deleteMany?: Maybe<Array<RecurrenciaScalarWhereInput>>,
  disconnect?: Maybe<Array<RecurrenciaWhereUniqueInput>>,
  set?: Maybe<Array<RecurrenciaWhereUniqueInput>>,
  update?: Maybe<Array<RecurrenciaUpdateWithWhereUniqueWithoutLeccionInput>>,
  updateMany?: Maybe<Array<RecurrenciaUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<RecurrenciaUpsertWithWhereUniqueWithoutLeccionInput>>,
};

export type RecurrenciaUpdateManyWithoutPlannedSpacesInput = {
  connect?: Maybe<Array<RecurrenciaWhereUniqueInput>>,
  create?: Maybe<Array<RecurrenciaCreateWithoutPlannedSpacesInput>>,
  delete?: Maybe<Array<RecurrenciaWhereUniqueInput>>,
  deleteMany?: Maybe<Array<RecurrenciaScalarWhereInput>>,
  disconnect?: Maybe<Array<RecurrenciaWhereUniqueInput>>,
  set?: Maybe<Array<RecurrenciaWhereUniqueInput>>,
  update?: Maybe<Array<RecurrenciaUpdateWithWhereUniqueWithoutPlannedSpacesInput>>,
  updateMany?: Maybe<Array<RecurrenciaUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<RecurrenciaUpsertWithWhereUniqueWithoutPlannedSpacesInput>>,
};

export type RecurrenciaUpdateManyWithWhereNestedInput = {
  data: RecurrenciaUpdateManyDataInput,
  where: RecurrenciaScalarWhereInput,
};

export type RecurrenciaUpdateWithoutLeccionDataInput = {
  plannedSpaces?: Maybe<SpaceUpdateManyWithoutLeccionesPlanificadasInput>,
  timeEnd?: Maybe<Scalars['String']>,
  timeStart?: Maybe<Scalars['String']>,
  weekday?: Maybe<WeekDay>,
};

export type RecurrenciaUpdateWithoutPlannedSpacesDataInput = {
  leccion?: Maybe<LeccionUpdateOneRequiredWithoutRecurrenciasInput>,
  timeEnd?: Maybe<Scalars['String']>,
  timeStart?: Maybe<Scalars['String']>,
  weekday?: Maybe<WeekDay>,
};

export type RecurrenciaUpdateWithWhereUniqueWithoutLeccionInput = {
  data: RecurrenciaUpdateWithoutLeccionDataInput,
  where: RecurrenciaWhereUniqueInput,
};

export type RecurrenciaUpdateWithWhereUniqueWithoutPlannedSpacesInput = {
  data: RecurrenciaUpdateWithoutPlannedSpacesDataInput,
  where: RecurrenciaWhereUniqueInput,
};

export type RecurrenciaUpsertWithWhereUniqueWithoutLeccionInput = {
  create: RecurrenciaCreateWithoutLeccionInput,
  update: RecurrenciaUpdateWithoutLeccionDataInput,
  where: RecurrenciaWhereUniqueInput,
};

export type RecurrenciaUpsertWithWhereUniqueWithoutPlannedSpacesInput = {
  create: RecurrenciaCreateWithoutPlannedSpacesInput,
  update: RecurrenciaUpdateWithoutPlannedSpacesDataInput,
  where: RecurrenciaWhereUniqueInput,
};

export type RecurrenciaWhereInput = {
  AND?: Maybe<Array<RecurrenciaWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  leccion?: Maybe<LeccionWhereInput>,
  NOT?: Maybe<Array<RecurrenciaWhereInput>>,
  OR?: Maybe<Array<RecurrenciaWhereInput>>,
  plannedSpaces_every?: Maybe<SpaceWhereInput>,
  plannedSpaces_none?: Maybe<SpaceWhereInput>,
  plannedSpaces_some?: Maybe<SpaceWhereInput>,
  timeEnd?: Maybe<Scalars['String']>,
  timeEnd_contains?: Maybe<Scalars['String']>,
  timeEnd_ends_with?: Maybe<Scalars['String']>,
  timeEnd_gt?: Maybe<Scalars['String']>,
  timeEnd_gte?: Maybe<Scalars['String']>,
  timeEnd_in?: Maybe<Array<Scalars['String']>>,
  timeEnd_lt?: Maybe<Scalars['String']>,
  timeEnd_lte?: Maybe<Scalars['String']>,
  timeEnd_not?: Maybe<Scalars['String']>,
  timeEnd_not_contains?: Maybe<Scalars['String']>,
  timeEnd_not_ends_with?: Maybe<Scalars['String']>,
  timeEnd_not_in?: Maybe<Array<Scalars['String']>>,
  timeEnd_not_starts_with?: Maybe<Scalars['String']>,
  timeEnd_starts_with?: Maybe<Scalars['String']>,
  timeStart?: Maybe<Scalars['String']>,
  timeStart_contains?: Maybe<Scalars['String']>,
  timeStart_ends_with?: Maybe<Scalars['String']>,
  timeStart_gt?: Maybe<Scalars['String']>,
  timeStart_gte?: Maybe<Scalars['String']>,
  timeStart_in?: Maybe<Array<Scalars['String']>>,
  timeStart_lt?: Maybe<Scalars['String']>,
  timeStart_lte?: Maybe<Scalars['String']>,
  timeStart_not?: Maybe<Scalars['String']>,
  timeStart_not_contains?: Maybe<Scalars['String']>,
  timeStart_not_ends_with?: Maybe<Scalars['String']>,
  timeStart_not_in?: Maybe<Array<Scalars['String']>>,
  timeStart_not_starts_with?: Maybe<Scalars['String']>,
  timeStart_starts_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  weekday?: Maybe<WeekDay>,
  weekday_in?: Maybe<Array<WeekDay>>,
  weekday_not?: Maybe<WeekDay>,
  weekday_not_in?: Maybe<Array<WeekDay>>,
};

export type RecurrenciaWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Role = {
   __typename?: 'Role',
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  name: Scalars['String'],
  updatedAt: Scalars['DateTime'],
  users?: Maybe<Array<User>>,
};


export type RoleUsersArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<UserWhereInput>
};

export type RoleConnection = {
   __typename?: 'RoleConnection',
  aggregate: AggregateRole,
  edges: Array<RoleEdge>,
  pageInfo: PageInfo,
};

export type RoleCreateInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  users?: Maybe<UserCreateManyWithoutRolesInput>,
};

export type RoleCreateManyWithoutUsersInput = {
  connect?: Maybe<Array<RoleWhereUniqueInput>>,
  create?: Maybe<Array<RoleCreateWithoutUsersInput>>,
};

export type RoleCreateOneInput = {
  connect?: Maybe<RoleWhereUniqueInput>,
  create?: Maybe<RoleCreateInput>,
};

export type RoleCreateWithoutUsersInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
};

export type RoleEdge = {
   __typename?: 'RoleEdge',
  cursor: Scalars['String'],
  node: Role,
};

export enum RoleOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type RoleScalarWhereInput = {
  AND?: Maybe<Array<RoleScalarWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<RoleScalarWhereInput>>,
  OR?: Maybe<Array<RoleScalarWhereInput>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type RoleUpdateInput = {
  name?: Maybe<Scalars['String']>,
  users?: Maybe<UserUpdateManyWithoutRolesInput>,
};

export type RoleUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>,
};

export type RoleUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
};

export type RoleUpdateManyWithoutUsersInput = {
  connect?: Maybe<Array<RoleWhereUniqueInput>>,
  create?: Maybe<Array<RoleCreateWithoutUsersInput>>,
  delete?: Maybe<Array<RoleWhereUniqueInput>>,
  deleteMany?: Maybe<Array<RoleScalarWhereInput>>,
  disconnect?: Maybe<Array<RoleWhereUniqueInput>>,
  set?: Maybe<Array<RoleWhereUniqueInput>>,
  update?: Maybe<Array<RoleUpdateWithWhereUniqueWithoutUsersInput>>,
  updateMany?: Maybe<Array<RoleUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<RoleUpsertWithWhereUniqueWithoutUsersInput>>,
};

export type RoleUpdateManyWithWhereNestedInput = {
  data: RoleUpdateManyDataInput,
  where: RoleScalarWhereInput,
};

export type RoleUpdateWithoutUsersDataInput = {
  name?: Maybe<Scalars['String']>,
};

export type RoleUpdateWithWhereUniqueWithoutUsersInput = {
  data: RoleUpdateWithoutUsersDataInput,
  where: RoleWhereUniqueInput,
};

export type RoleUpsertWithWhereUniqueWithoutUsersInput = {
  create: RoleCreateWithoutUsersInput,
  update: RoleUpdateWithoutUsersDataInput,
  where: RoleWhereUniqueInput,
};

export type RoleWhereInput = {
  AND?: Maybe<Array<RoleWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<RoleWhereInput>>,
  OR?: Maybe<Array<RoleWhereInput>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  users_every?: Maybe<UserWhereInput>,
  users_none?: Maybe<UserWhereInput>,
  users_some?: Maybe<UserWhereInput>,
};

export type RoleWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export enum Semestre {
  Anual = 'ANUAL',
  Semestre_1 = 'SEMESTRE_1',
  Semestre_2 = 'SEMESTRE_2'
}

export type Sesion = {
   __typename?: 'Sesion',
  asistencia?: Maybe<Array<Asistencia>>,
  at: Space,
  by: User,
  closedAt: Scalars['DateTime'],
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  leccion: Leccion,
  updatedAt: Scalars['DateTime'],
};


export type SesionAsistenciaArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<AsistenciaOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<AsistenciaWhereInput>
};

export type SesionConnection = {
   __typename?: 'SesionConnection',
  aggregate: AggregateSesion,
  edges: Array<SesionEdge>,
  pageInfo: PageInfo,
};

export type SesionCreateInput = {
  asistencia?: Maybe<AsistenciaCreateManyWithoutSesionInput>,
  at: SpaceCreateOneWithoutSesionesInput,
  by: UserCreateOneWithoutSesionesInput,
  closedAt: Scalars['DateTime'],
  id?: Maybe<Scalars['ID']>,
  leccion: LeccionCreateOneWithoutSesionesInput,
};

export type SesionCreateManyWithoutAtInput = {
  connect?: Maybe<Array<SesionWhereUniqueInput>>,
  create?: Maybe<Array<SesionCreateWithoutAtInput>>,
};

export type SesionCreateManyWithoutByInput = {
  connect?: Maybe<Array<SesionWhereUniqueInput>>,
  create?: Maybe<Array<SesionCreateWithoutByInput>>,
};

export type SesionCreateManyWithoutLeccionInput = {
  connect?: Maybe<Array<SesionWhereUniqueInput>>,
  create?: Maybe<Array<SesionCreateWithoutLeccionInput>>,
};

export type SesionCreateOneInput = {
  connect?: Maybe<SesionWhereUniqueInput>,
  create?: Maybe<SesionCreateInput>,
};

export type SesionCreateOneWithoutAsistenciaInput = {
  connect?: Maybe<SesionWhereUniqueInput>,
  create?: Maybe<SesionCreateWithoutAsistenciaInput>,
};

export type SesionCreateWithoutAsistenciaInput = {
  at: SpaceCreateOneWithoutSesionesInput,
  by: UserCreateOneWithoutSesionesInput,
  closedAt: Scalars['DateTime'],
  id?: Maybe<Scalars['ID']>,
  leccion: LeccionCreateOneWithoutSesionesInput,
};

export type SesionCreateWithoutAtInput = {
  asistencia?: Maybe<AsistenciaCreateManyWithoutSesionInput>,
  by: UserCreateOneWithoutSesionesInput,
  closedAt: Scalars['DateTime'],
  id?: Maybe<Scalars['ID']>,
  leccion: LeccionCreateOneWithoutSesionesInput,
};

export type SesionCreateWithoutByInput = {
  asistencia?: Maybe<AsistenciaCreateManyWithoutSesionInput>,
  at: SpaceCreateOneWithoutSesionesInput,
  closedAt: Scalars['DateTime'],
  id?: Maybe<Scalars['ID']>,
  leccion: LeccionCreateOneWithoutSesionesInput,
};

export type SesionCreateWithoutLeccionInput = {
  asistencia?: Maybe<AsistenciaCreateManyWithoutSesionInput>,
  at: SpaceCreateOneWithoutSesionesInput,
  by: UserCreateOneWithoutSesionesInput,
  closedAt: Scalars['DateTime'],
  id?: Maybe<Scalars['ID']>,
};

export type SesionEdge = {
   __typename?: 'SesionEdge',
  cursor: Scalars['String'],
  node: Sesion,
};

export enum SesionOrderByInput {
  ClosedAtAsc = 'closedAt_ASC',
  ClosedAtDesc = 'closedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type SesionScalarWhereInput = {
  AND?: Maybe<Array<SesionScalarWhereInput>>,
  closedAt?: Maybe<Scalars['DateTime']>,
  closedAt_gt?: Maybe<Scalars['DateTime']>,
  closedAt_gte?: Maybe<Scalars['DateTime']>,
  closedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  closedAt_lt?: Maybe<Scalars['DateTime']>,
  closedAt_lte?: Maybe<Scalars['DateTime']>,
  closedAt_not?: Maybe<Scalars['DateTime']>,
  closedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  NOT?: Maybe<Array<SesionScalarWhereInput>>,
  OR?: Maybe<Array<SesionScalarWhereInput>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type SesionUpdateInput = {
  asistencia?: Maybe<AsistenciaUpdateManyWithoutSesionInput>,
  at?: Maybe<SpaceUpdateOneRequiredWithoutSesionesInput>,
  by?: Maybe<UserUpdateOneRequiredWithoutSesionesInput>,
  closedAt?: Maybe<Scalars['DateTime']>,
  leccion?: Maybe<LeccionUpdateOneRequiredWithoutSesionesInput>,
};

export type SesionUpdateManyDataInput = {
  closedAt?: Maybe<Scalars['DateTime']>,
};

export type SesionUpdateManyMutationInput = {
  closedAt?: Maybe<Scalars['DateTime']>,
};

export type SesionUpdateManyWithoutAtInput = {
  connect?: Maybe<Array<SesionWhereUniqueInput>>,
  create?: Maybe<Array<SesionCreateWithoutAtInput>>,
  delete?: Maybe<Array<SesionWhereUniqueInput>>,
  deleteMany?: Maybe<Array<SesionScalarWhereInput>>,
  disconnect?: Maybe<Array<SesionWhereUniqueInput>>,
  set?: Maybe<Array<SesionWhereUniqueInput>>,
  update?: Maybe<Array<SesionUpdateWithWhereUniqueWithoutAtInput>>,
  updateMany?: Maybe<Array<SesionUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<SesionUpsertWithWhereUniqueWithoutAtInput>>,
};

export type SesionUpdateManyWithoutByInput = {
  connect?: Maybe<Array<SesionWhereUniqueInput>>,
  create?: Maybe<Array<SesionCreateWithoutByInput>>,
  delete?: Maybe<Array<SesionWhereUniqueInput>>,
  deleteMany?: Maybe<Array<SesionScalarWhereInput>>,
  disconnect?: Maybe<Array<SesionWhereUniqueInput>>,
  set?: Maybe<Array<SesionWhereUniqueInput>>,
  update?: Maybe<Array<SesionUpdateWithWhereUniqueWithoutByInput>>,
  updateMany?: Maybe<Array<SesionUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<SesionUpsertWithWhereUniqueWithoutByInput>>,
};

export type SesionUpdateManyWithoutLeccionInput = {
  connect?: Maybe<Array<SesionWhereUniqueInput>>,
  create?: Maybe<Array<SesionCreateWithoutLeccionInput>>,
  delete?: Maybe<Array<SesionWhereUniqueInput>>,
  deleteMany?: Maybe<Array<SesionScalarWhereInput>>,
  disconnect?: Maybe<Array<SesionWhereUniqueInput>>,
  set?: Maybe<Array<SesionWhereUniqueInput>>,
  update?: Maybe<Array<SesionUpdateWithWhereUniqueWithoutLeccionInput>>,
  updateMany?: Maybe<Array<SesionUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<SesionUpsertWithWhereUniqueWithoutLeccionInput>>,
};

export type SesionUpdateManyWithWhereNestedInput = {
  data: SesionUpdateManyDataInput,
  where: SesionScalarWhereInput,
};

export type SesionUpdateOneRequiredWithoutAsistenciaInput = {
  connect?: Maybe<SesionWhereUniqueInput>,
  create?: Maybe<SesionCreateWithoutAsistenciaInput>,
  update?: Maybe<SesionUpdateWithoutAsistenciaDataInput>,
  upsert?: Maybe<SesionUpsertWithoutAsistenciaInput>,
};

export type SesionUpdateWithoutAsistenciaDataInput = {
  at?: Maybe<SpaceUpdateOneRequiredWithoutSesionesInput>,
  by?: Maybe<UserUpdateOneRequiredWithoutSesionesInput>,
  closedAt?: Maybe<Scalars['DateTime']>,
  leccion?: Maybe<LeccionUpdateOneRequiredWithoutSesionesInput>,
};

export type SesionUpdateWithoutAtDataInput = {
  asistencia?: Maybe<AsistenciaUpdateManyWithoutSesionInput>,
  by?: Maybe<UserUpdateOneRequiredWithoutSesionesInput>,
  closedAt?: Maybe<Scalars['DateTime']>,
  leccion?: Maybe<LeccionUpdateOneRequiredWithoutSesionesInput>,
};

export type SesionUpdateWithoutByDataInput = {
  asistencia?: Maybe<AsistenciaUpdateManyWithoutSesionInput>,
  at?: Maybe<SpaceUpdateOneRequiredWithoutSesionesInput>,
  closedAt?: Maybe<Scalars['DateTime']>,
  leccion?: Maybe<LeccionUpdateOneRequiredWithoutSesionesInput>,
};

export type SesionUpdateWithoutLeccionDataInput = {
  asistencia?: Maybe<AsistenciaUpdateManyWithoutSesionInput>,
  at?: Maybe<SpaceUpdateOneRequiredWithoutSesionesInput>,
  by?: Maybe<UserUpdateOneRequiredWithoutSesionesInput>,
  closedAt?: Maybe<Scalars['DateTime']>,
};

export type SesionUpdateWithWhereUniqueWithoutAtInput = {
  data: SesionUpdateWithoutAtDataInput,
  where: SesionWhereUniqueInput,
};

export type SesionUpdateWithWhereUniqueWithoutByInput = {
  data: SesionUpdateWithoutByDataInput,
  where: SesionWhereUniqueInput,
};

export type SesionUpdateWithWhereUniqueWithoutLeccionInput = {
  data: SesionUpdateWithoutLeccionDataInput,
  where: SesionWhereUniqueInput,
};

export type SesionUpsertWithoutAsistenciaInput = {
  create: SesionCreateWithoutAsistenciaInput,
  update: SesionUpdateWithoutAsistenciaDataInput,
};

export type SesionUpsertWithWhereUniqueWithoutAtInput = {
  create: SesionCreateWithoutAtInput,
  update: SesionUpdateWithoutAtDataInput,
  where: SesionWhereUniqueInput,
};

export type SesionUpsertWithWhereUniqueWithoutByInput = {
  create: SesionCreateWithoutByInput,
  update: SesionUpdateWithoutByDataInput,
  where: SesionWhereUniqueInput,
};

export type SesionUpsertWithWhereUniqueWithoutLeccionInput = {
  create: SesionCreateWithoutLeccionInput,
  update: SesionUpdateWithoutLeccionDataInput,
  where: SesionWhereUniqueInput,
};

export type SesionWhereInput = {
  AND?: Maybe<Array<SesionWhereInput>>,
  asistencia_every?: Maybe<AsistenciaWhereInput>,
  asistencia_none?: Maybe<AsistenciaWhereInput>,
  asistencia_some?: Maybe<AsistenciaWhereInput>,
  at?: Maybe<SpaceWhereInput>,
  by?: Maybe<UserWhereInput>,
  closedAt?: Maybe<Scalars['DateTime']>,
  closedAt_gt?: Maybe<Scalars['DateTime']>,
  closedAt_gte?: Maybe<Scalars['DateTime']>,
  closedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  closedAt_lt?: Maybe<Scalars['DateTime']>,
  closedAt_lte?: Maybe<Scalars['DateTime']>,
  closedAt_not?: Maybe<Scalars['DateTime']>,
  closedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  leccion?: Maybe<LeccionWhereInput>,
  NOT?: Maybe<Array<SesionWhereInput>>,
  OR?: Maybe<Array<SesionWhereInput>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type SesionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type SocialLink = {
   __typename?: 'SocialLink',
  id: Scalars['ID'],
  link: Scalars['String'],
  owner: User,
  socialNetwork: SocialNetwork,
};

export type SocialLinkConnection = {
   __typename?: 'SocialLinkConnection',
  aggregate: AggregateSocialLink,
  edges: Array<SocialLinkEdge>,
  pageInfo: PageInfo,
};

export type SocialLinkCreateInput = {
  id?: Maybe<Scalars['ID']>,
  link: Scalars['String'],
  owner: UserCreateOneWithoutSocialNetworkLinksInput,
  socialNetwork: SocialNetworkCreateOneWithoutUserLinksInput,
};

export type SocialLinkCreateManyWithoutOwnerInput = {
  connect?: Maybe<Array<SocialLinkWhereUniqueInput>>,
  create?: Maybe<Array<SocialLinkCreateWithoutOwnerInput>>,
};

export type SocialLinkCreateManyWithoutSocialNetworkInput = {
  connect?: Maybe<Array<SocialLinkWhereUniqueInput>>,
  create?: Maybe<Array<SocialLinkCreateWithoutSocialNetworkInput>>,
};

export type SocialLinkCreateWithoutOwnerInput = {
  id?: Maybe<Scalars['ID']>,
  link: Scalars['String'],
  socialNetwork: SocialNetworkCreateOneWithoutUserLinksInput,
};

export type SocialLinkCreateWithoutSocialNetworkInput = {
  id?: Maybe<Scalars['ID']>,
  link: Scalars['String'],
  owner: UserCreateOneWithoutSocialNetworkLinksInput,
};

export type SocialLinkEdge = {
   __typename?: 'SocialLinkEdge',
  cursor: Scalars['String'],
  node: SocialLink,
};

export enum SocialLinkOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type SocialLinkScalarWhereInput = {
  AND?: Maybe<Array<SocialLinkScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  link?: Maybe<Scalars['String']>,
  link_contains?: Maybe<Scalars['String']>,
  link_ends_with?: Maybe<Scalars['String']>,
  link_gt?: Maybe<Scalars['String']>,
  link_gte?: Maybe<Scalars['String']>,
  link_in?: Maybe<Array<Scalars['String']>>,
  link_lt?: Maybe<Scalars['String']>,
  link_lte?: Maybe<Scalars['String']>,
  link_not?: Maybe<Scalars['String']>,
  link_not_contains?: Maybe<Scalars['String']>,
  link_not_ends_with?: Maybe<Scalars['String']>,
  link_not_in?: Maybe<Array<Scalars['String']>>,
  link_not_starts_with?: Maybe<Scalars['String']>,
  link_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<SocialLinkScalarWhereInput>>,
  OR?: Maybe<Array<SocialLinkScalarWhereInput>>,
};

export type SocialLinkUpdateInput = {
  link?: Maybe<Scalars['String']>,
  owner?: Maybe<UserUpdateOneRequiredWithoutSocialNetworkLinksInput>,
  socialNetwork?: Maybe<SocialNetworkUpdateOneRequiredWithoutUserLinksInput>,
};

export type SocialLinkUpdateManyDataInput = {
  link?: Maybe<Scalars['String']>,
};

export type SocialLinkUpdateManyMutationInput = {
  link?: Maybe<Scalars['String']>,
};

export type SocialLinkUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<SocialLinkWhereUniqueInput>>,
  create?: Maybe<Array<SocialLinkCreateWithoutOwnerInput>>,
  delete?: Maybe<Array<SocialLinkWhereUniqueInput>>,
  deleteMany?: Maybe<Array<SocialLinkScalarWhereInput>>,
  disconnect?: Maybe<Array<SocialLinkWhereUniqueInput>>,
  set?: Maybe<Array<SocialLinkWhereUniqueInput>>,
  update?: Maybe<Array<SocialLinkUpdateWithWhereUniqueWithoutOwnerInput>>,
  updateMany?: Maybe<Array<SocialLinkUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<SocialLinkUpsertWithWhereUniqueWithoutOwnerInput>>,
};

export type SocialLinkUpdateManyWithoutSocialNetworkInput = {
  connect?: Maybe<Array<SocialLinkWhereUniqueInput>>,
  create?: Maybe<Array<SocialLinkCreateWithoutSocialNetworkInput>>,
  delete?: Maybe<Array<SocialLinkWhereUniqueInput>>,
  deleteMany?: Maybe<Array<SocialLinkScalarWhereInput>>,
  disconnect?: Maybe<Array<SocialLinkWhereUniqueInput>>,
  set?: Maybe<Array<SocialLinkWhereUniqueInput>>,
  update?: Maybe<Array<SocialLinkUpdateWithWhereUniqueWithoutSocialNetworkInput>>,
  updateMany?: Maybe<Array<SocialLinkUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<SocialLinkUpsertWithWhereUniqueWithoutSocialNetworkInput>>,
};

export type SocialLinkUpdateManyWithWhereNestedInput = {
  data: SocialLinkUpdateManyDataInput,
  where: SocialLinkScalarWhereInput,
};

export type SocialLinkUpdateWithoutOwnerDataInput = {
  link?: Maybe<Scalars['String']>,
  socialNetwork?: Maybe<SocialNetworkUpdateOneRequiredWithoutUserLinksInput>,
};

export type SocialLinkUpdateWithoutSocialNetworkDataInput = {
  link?: Maybe<Scalars['String']>,
  owner?: Maybe<UserUpdateOneRequiredWithoutSocialNetworkLinksInput>,
};

export type SocialLinkUpdateWithWhereUniqueWithoutOwnerInput = {
  data: SocialLinkUpdateWithoutOwnerDataInput,
  where: SocialLinkWhereUniqueInput,
};

export type SocialLinkUpdateWithWhereUniqueWithoutSocialNetworkInput = {
  data: SocialLinkUpdateWithoutSocialNetworkDataInput,
  where: SocialLinkWhereUniqueInput,
};

export type SocialLinkUpsertWithWhereUniqueWithoutOwnerInput = {
  create: SocialLinkCreateWithoutOwnerInput,
  update: SocialLinkUpdateWithoutOwnerDataInput,
  where: SocialLinkWhereUniqueInput,
};

export type SocialLinkUpsertWithWhereUniqueWithoutSocialNetworkInput = {
  create: SocialLinkCreateWithoutSocialNetworkInput,
  update: SocialLinkUpdateWithoutSocialNetworkDataInput,
  where: SocialLinkWhereUniqueInput,
};

export type SocialLinkWhereInput = {
  AND?: Maybe<Array<SocialLinkWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  link?: Maybe<Scalars['String']>,
  link_contains?: Maybe<Scalars['String']>,
  link_ends_with?: Maybe<Scalars['String']>,
  link_gt?: Maybe<Scalars['String']>,
  link_gte?: Maybe<Scalars['String']>,
  link_in?: Maybe<Array<Scalars['String']>>,
  link_lt?: Maybe<Scalars['String']>,
  link_lte?: Maybe<Scalars['String']>,
  link_not?: Maybe<Scalars['String']>,
  link_not_contains?: Maybe<Scalars['String']>,
  link_not_ends_with?: Maybe<Scalars['String']>,
  link_not_in?: Maybe<Array<Scalars['String']>>,
  link_not_starts_with?: Maybe<Scalars['String']>,
  link_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<SocialLinkWhereInput>>,
  OR?: Maybe<Array<SocialLinkWhereInput>>,
  owner?: Maybe<UserWhereInput>,
  socialNetwork?: Maybe<SocialNetworkWhereInput>,
};

export type SocialLinkWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  link?: Maybe<Scalars['String']>,
};

export type SocialNetwork = {
   __typename?: 'SocialNetwork',
  baseURL: Scalars['String'],
  id: Scalars['ID'],
  name: Scalars['String'],
  ownURL: Scalars['String'],
  userLinks?: Maybe<Array<SocialLink>>,
};


export type SocialNetworkUserLinksArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<SocialLinkOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<SocialLinkWhereInput>
};

export type SocialNetworkConnection = {
   __typename?: 'SocialNetworkConnection',
  aggregate: AggregateSocialNetwork,
  edges: Array<SocialNetworkEdge>,
  pageInfo: PageInfo,
};

export type SocialNetworkCreateInput = {
  baseURL: Scalars['String'],
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  ownURL: Scalars['String'],
  userLinks?: Maybe<SocialLinkCreateManyWithoutSocialNetworkInput>,
};

export type SocialNetworkCreateOneWithoutUserLinksInput = {
  connect?: Maybe<SocialNetworkWhereUniqueInput>,
  create?: Maybe<SocialNetworkCreateWithoutUserLinksInput>,
};

export type SocialNetworkCreateWithoutUserLinksInput = {
  baseURL: Scalars['String'],
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  ownURL: Scalars['String'],
};

export type SocialNetworkEdge = {
   __typename?: 'SocialNetworkEdge',
  cursor: Scalars['String'],
  node: SocialNetwork,
};

export enum SocialNetworkOrderByInput {
  BaseUrlAsc = 'baseURL_ASC',
  BaseUrlDesc = 'baseURL_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OwnUrlAsc = 'ownURL_ASC',
  OwnUrlDesc = 'ownURL_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type SocialNetworkUpdateInput = {
  baseURL?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  ownURL?: Maybe<Scalars['String']>,
  userLinks?: Maybe<SocialLinkUpdateManyWithoutSocialNetworkInput>,
};

export type SocialNetworkUpdateManyMutationInput = {
  baseURL?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  ownURL?: Maybe<Scalars['String']>,
};

export type SocialNetworkUpdateOneRequiredWithoutUserLinksInput = {
  connect?: Maybe<SocialNetworkWhereUniqueInput>,
  create?: Maybe<SocialNetworkCreateWithoutUserLinksInput>,
  update?: Maybe<SocialNetworkUpdateWithoutUserLinksDataInput>,
  upsert?: Maybe<SocialNetworkUpsertWithoutUserLinksInput>,
};

export type SocialNetworkUpdateWithoutUserLinksDataInput = {
  baseURL?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  ownURL?: Maybe<Scalars['String']>,
};

export type SocialNetworkUpsertWithoutUserLinksInput = {
  create: SocialNetworkCreateWithoutUserLinksInput,
  update: SocialNetworkUpdateWithoutUserLinksDataInput,
};

export type SocialNetworkWhereInput = {
  AND?: Maybe<Array<SocialNetworkWhereInput>>,
  baseURL?: Maybe<Scalars['String']>,
  baseURL_contains?: Maybe<Scalars['String']>,
  baseURL_ends_with?: Maybe<Scalars['String']>,
  baseURL_gt?: Maybe<Scalars['String']>,
  baseURL_gte?: Maybe<Scalars['String']>,
  baseURL_in?: Maybe<Array<Scalars['String']>>,
  baseURL_lt?: Maybe<Scalars['String']>,
  baseURL_lte?: Maybe<Scalars['String']>,
  baseURL_not?: Maybe<Scalars['String']>,
  baseURL_not_contains?: Maybe<Scalars['String']>,
  baseURL_not_ends_with?: Maybe<Scalars['String']>,
  baseURL_not_in?: Maybe<Array<Scalars['String']>>,
  baseURL_not_starts_with?: Maybe<Scalars['String']>,
  baseURL_starts_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<SocialNetworkWhereInput>>,
  OR?: Maybe<Array<SocialNetworkWhereInput>>,
  ownURL?: Maybe<Scalars['String']>,
  ownURL_contains?: Maybe<Scalars['String']>,
  ownURL_ends_with?: Maybe<Scalars['String']>,
  ownURL_gt?: Maybe<Scalars['String']>,
  ownURL_gte?: Maybe<Scalars['String']>,
  ownURL_in?: Maybe<Array<Scalars['String']>>,
  ownURL_lt?: Maybe<Scalars['String']>,
  ownURL_lte?: Maybe<Scalars['String']>,
  ownURL_not?: Maybe<Scalars['String']>,
  ownURL_not_contains?: Maybe<Scalars['String']>,
  ownURL_not_ends_with?: Maybe<Scalars['String']>,
  ownURL_not_in?: Maybe<Array<Scalars['String']>>,
  ownURL_not_starts_with?: Maybe<Scalars['String']>,
  ownURL_starts_with?: Maybe<Scalars['String']>,
  userLinks_every?: Maybe<SocialLinkWhereInput>,
  userLinks_none?: Maybe<SocialLinkWhereInput>,
  userLinks_some?: Maybe<SocialLinkWhereInput>,
};

export type SocialNetworkWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Space = {
   __typename?: 'Space',
  createdAt: Scalars['DateTime'],
  events?: Maybe<Array<Event>>,
  examenes?: Maybe<Array<Examen>>,
  id: Scalars['ID'],
  leccionesPlanificadas?: Maybe<Array<Recurrencia>>,
  name: Scalars['String'],
  sesiones?: Maybe<Array<Sesion>>,
  updatedAt: Scalars['DateTime'],
  venue: Venue,
};


export type SpaceEventsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<EventOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<EventWhereInput>
};


export type SpaceExamenesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<ExamenOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<ExamenWhereInput>
};


export type SpaceLeccionesPlanificadasArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<RecurrenciaOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<RecurrenciaWhereInput>
};


export type SpaceSesionesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<SesionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<SesionWhereInput>
};

export type SpaceConnection = {
   __typename?: 'SpaceConnection',
  aggregate: AggregateSpace,
  edges: Array<SpaceEdge>,
  pageInfo: PageInfo,
};

export type SpaceCreateInput = {
  events?: Maybe<EventCreateManyWithoutPlaceInput>,
  examenes?: Maybe<ExamenCreateManyWithoutEspacioInput>,
  id?: Maybe<Scalars['ID']>,
  leccionesPlanificadas?: Maybe<RecurrenciaCreateManyWithoutPlannedSpacesInput>,
  name: Scalars['String'],
  sesiones?: Maybe<SesionCreateManyWithoutAtInput>,
  venue: VenueCreateOneWithoutSpacesInput,
};

export type SpaceCreateManyWithoutLeccionesPlanificadasInput = {
  connect?: Maybe<Array<SpaceWhereUniqueInput>>,
  create?: Maybe<Array<SpaceCreateWithoutLeccionesPlanificadasInput>>,
};

export type SpaceCreateManyWithoutVenueInput = {
  connect?: Maybe<Array<SpaceWhereUniqueInput>>,
  create?: Maybe<Array<SpaceCreateWithoutVenueInput>>,
};

export type SpaceCreateOneInput = {
  connect?: Maybe<SpaceWhereUniqueInput>,
  create?: Maybe<SpaceCreateInput>,
};

export type SpaceCreateOneWithoutEventsInput = {
  connect?: Maybe<SpaceWhereUniqueInput>,
  create?: Maybe<SpaceCreateWithoutEventsInput>,
};

export type SpaceCreateOneWithoutExamenesInput = {
  connect?: Maybe<SpaceWhereUniqueInput>,
  create?: Maybe<SpaceCreateWithoutExamenesInput>,
};

export type SpaceCreateOneWithoutSesionesInput = {
  connect?: Maybe<SpaceWhereUniqueInput>,
  create?: Maybe<SpaceCreateWithoutSesionesInput>,
};

export type SpaceCreateWithoutEventsInput = {
  examenes?: Maybe<ExamenCreateManyWithoutEspacioInput>,
  id?: Maybe<Scalars['ID']>,
  leccionesPlanificadas?: Maybe<RecurrenciaCreateManyWithoutPlannedSpacesInput>,
  name: Scalars['String'],
  sesiones?: Maybe<SesionCreateManyWithoutAtInput>,
  venue: VenueCreateOneWithoutSpacesInput,
};

export type SpaceCreateWithoutExamenesInput = {
  events?: Maybe<EventCreateManyWithoutPlaceInput>,
  id?: Maybe<Scalars['ID']>,
  leccionesPlanificadas?: Maybe<RecurrenciaCreateManyWithoutPlannedSpacesInput>,
  name: Scalars['String'],
  sesiones?: Maybe<SesionCreateManyWithoutAtInput>,
  venue: VenueCreateOneWithoutSpacesInput,
};

export type SpaceCreateWithoutLeccionesPlanificadasInput = {
  events?: Maybe<EventCreateManyWithoutPlaceInput>,
  examenes?: Maybe<ExamenCreateManyWithoutEspacioInput>,
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  sesiones?: Maybe<SesionCreateManyWithoutAtInput>,
  venue: VenueCreateOneWithoutSpacesInput,
};

export type SpaceCreateWithoutSesionesInput = {
  events?: Maybe<EventCreateManyWithoutPlaceInput>,
  examenes?: Maybe<ExamenCreateManyWithoutEspacioInput>,
  id?: Maybe<Scalars['ID']>,
  leccionesPlanificadas?: Maybe<RecurrenciaCreateManyWithoutPlannedSpacesInput>,
  name: Scalars['String'],
  venue: VenueCreateOneWithoutSpacesInput,
};

export type SpaceCreateWithoutVenueInput = {
  events?: Maybe<EventCreateManyWithoutPlaceInput>,
  examenes?: Maybe<ExamenCreateManyWithoutEspacioInput>,
  id?: Maybe<Scalars['ID']>,
  leccionesPlanificadas?: Maybe<RecurrenciaCreateManyWithoutPlannedSpacesInput>,
  name: Scalars['String'],
  sesiones?: Maybe<SesionCreateManyWithoutAtInput>,
};

export type SpaceEdge = {
   __typename?: 'SpaceEdge',
  cursor: Scalars['String'],
  node: Space,
};

export enum SpaceOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type SpaceScalarWhereInput = {
  AND?: Maybe<Array<SpaceScalarWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<SpaceScalarWhereInput>>,
  OR?: Maybe<Array<SpaceScalarWhereInput>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type SpaceUpdateInput = {
  events?: Maybe<EventUpdateManyWithoutPlaceInput>,
  examenes?: Maybe<ExamenUpdateManyWithoutEspacioInput>,
  leccionesPlanificadas?: Maybe<RecurrenciaUpdateManyWithoutPlannedSpacesInput>,
  name?: Maybe<Scalars['String']>,
  sesiones?: Maybe<SesionUpdateManyWithoutAtInput>,
  venue?: Maybe<VenueUpdateOneRequiredWithoutSpacesInput>,
};

export type SpaceUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>,
};

export type SpaceUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
};

export type SpaceUpdateManyWithoutLeccionesPlanificadasInput = {
  connect?: Maybe<Array<SpaceWhereUniqueInput>>,
  create?: Maybe<Array<SpaceCreateWithoutLeccionesPlanificadasInput>>,
  delete?: Maybe<Array<SpaceWhereUniqueInput>>,
  deleteMany?: Maybe<Array<SpaceScalarWhereInput>>,
  disconnect?: Maybe<Array<SpaceWhereUniqueInput>>,
  set?: Maybe<Array<SpaceWhereUniqueInput>>,
  update?: Maybe<Array<SpaceUpdateWithWhereUniqueWithoutLeccionesPlanificadasInput>>,
  updateMany?: Maybe<Array<SpaceUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<SpaceUpsertWithWhereUniqueWithoutLeccionesPlanificadasInput>>,
};

export type SpaceUpdateManyWithoutVenueInput = {
  connect?: Maybe<Array<SpaceWhereUniqueInput>>,
  create?: Maybe<Array<SpaceCreateWithoutVenueInput>>,
  delete?: Maybe<Array<SpaceWhereUniqueInput>>,
  deleteMany?: Maybe<Array<SpaceScalarWhereInput>>,
  disconnect?: Maybe<Array<SpaceWhereUniqueInput>>,
  set?: Maybe<Array<SpaceWhereUniqueInput>>,
  update?: Maybe<Array<SpaceUpdateWithWhereUniqueWithoutVenueInput>>,
  updateMany?: Maybe<Array<SpaceUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<SpaceUpsertWithWhereUniqueWithoutVenueInput>>,
};

export type SpaceUpdateManyWithWhereNestedInput = {
  data: SpaceUpdateManyDataInput,
  where: SpaceScalarWhereInput,
};

export type SpaceUpdateOneRequiredWithoutEventsInput = {
  connect?: Maybe<SpaceWhereUniqueInput>,
  create?: Maybe<SpaceCreateWithoutEventsInput>,
  update?: Maybe<SpaceUpdateWithoutEventsDataInput>,
  upsert?: Maybe<SpaceUpsertWithoutEventsInput>,
};

export type SpaceUpdateOneRequiredWithoutExamenesInput = {
  connect?: Maybe<SpaceWhereUniqueInput>,
  create?: Maybe<SpaceCreateWithoutExamenesInput>,
  update?: Maybe<SpaceUpdateWithoutExamenesDataInput>,
  upsert?: Maybe<SpaceUpsertWithoutExamenesInput>,
};

export type SpaceUpdateOneRequiredWithoutSesionesInput = {
  connect?: Maybe<SpaceWhereUniqueInput>,
  create?: Maybe<SpaceCreateWithoutSesionesInput>,
  update?: Maybe<SpaceUpdateWithoutSesionesDataInput>,
  upsert?: Maybe<SpaceUpsertWithoutSesionesInput>,
};

export type SpaceUpdateWithoutEventsDataInput = {
  examenes?: Maybe<ExamenUpdateManyWithoutEspacioInput>,
  leccionesPlanificadas?: Maybe<RecurrenciaUpdateManyWithoutPlannedSpacesInput>,
  name?: Maybe<Scalars['String']>,
  sesiones?: Maybe<SesionUpdateManyWithoutAtInput>,
  venue?: Maybe<VenueUpdateOneRequiredWithoutSpacesInput>,
};

export type SpaceUpdateWithoutExamenesDataInput = {
  events?: Maybe<EventUpdateManyWithoutPlaceInput>,
  leccionesPlanificadas?: Maybe<RecurrenciaUpdateManyWithoutPlannedSpacesInput>,
  name?: Maybe<Scalars['String']>,
  sesiones?: Maybe<SesionUpdateManyWithoutAtInput>,
  venue?: Maybe<VenueUpdateOneRequiredWithoutSpacesInput>,
};

export type SpaceUpdateWithoutLeccionesPlanificadasDataInput = {
  events?: Maybe<EventUpdateManyWithoutPlaceInput>,
  examenes?: Maybe<ExamenUpdateManyWithoutEspacioInput>,
  name?: Maybe<Scalars['String']>,
  sesiones?: Maybe<SesionUpdateManyWithoutAtInput>,
  venue?: Maybe<VenueUpdateOneRequiredWithoutSpacesInput>,
};

export type SpaceUpdateWithoutSesionesDataInput = {
  events?: Maybe<EventUpdateManyWithoutPlaceInput>,
  examenes?: Maybe<ExamenUpdateManyWithoutEspacioInput>,
  leccionesPlanificadas?: Maybe<RecurrenciaUpdateManyWithoutPlannedSpacesInput>,
  name?: Maybe<Scalars['String']>,
  venue?: Maybe<VenueUpdateOneRequiredWithoutSpacesInput>,
};

export type SpaceUpdateWithoutVenueDataInput = {
  events?: Maybe<EventUpdateManyWithoutPlaceInput>,
  examenes?: Maybe<ExamenUpdateManyWithoutEspacioInput>,
  leccionesPlanificadas?: Maybe<RecurrenciaUpdateManyWithoutPlannedSpacesInput>,
  name?: Maybe<Scalars['String']>,
  sesiones?: Maybe<SesionUpdateManyWithoutAtInput>,
};

export type SpaceUpdateWithWhereUniqueWithoutLeccionesPlanificadasInput = {
  data: SpaceUpdateWithoutLeccionesPlanificadasDataInput,
  where: SpaceWhereUniqueInput,
};

export type SpaceUpdateWithWhereUniqueWithoutVenueInput = {
  data: SpaceUpdateWithoutVenueDataInput,
  where: SpaceWhereUniqueInput,
};

export type SpaceUpsertWithoutEventsInput = {
  create: SpaceCreateWithoutEventsInput,
  update: SpaceUpdateWithoutEventsDataInput,
};

export type SpaceUpsertWithoutExamenesInput = {
  create: SpaceCreateWithoutExamenesInput,
  update: SpaceUpdateWithoutExamenesDataInput,
};

export type SpaceUpsertWithoutSesionesInput = {
  create: SpaceCreateWithoutSesionesInput,
  update: SpaceUpdateWithoutSesionesDataInput,
};

export type SpaceUpsertWithWhereUniqueWithoutLeccionesPlanificadasInput = {
  create: SpaceCreateWithoutLeccionesPlanificadasInput,
  update: SpaceUpdateWithoutLeccionesPlanificadasDataInput,
  where: SpaceWhereUniqueInput,
};

export type SpaceUpsertWithWhereUniqueWithoutVenueInput = {
  create: SpaceCreateWithoutVenueInput,
  update: SpaceUpdateWithoutVenueDataInput,
  where: SpaceWhereUniqueInput,
};

export type SpaceWhereInput = {
  AND?: Maybe<Array<SpaceWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  events_every?: Maybe<EventWhereInput>,
  events_none?: Maybe<EventWhereInput>,
  events_some?: Maybe<EventWhereInput>,
  examenes_every?: Maybe<ExamenWhereInput>,
  examenes_none?: Maybe<ExamenWhereInput>,
  examenes_some?: Maybe<ExamenWhereInput>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  leccionesPlanificadas_every?: Maybe<RecurrenciaWhereInput>,
  leccionesPlanificadas_none?: Maybe<RecurrenciaWhereInput>,
  leccionesPlanificadas_some?: Maybe<RecurrenciaWhereInput>,
  name?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<SpaceWhereInput>>,
  OR?: Maybe<Array<SpaceWhereInput>>,
  sesiones_every?: Maybe<SesionWhereInput>,
  sesiones_none?: Maybe<SesionWhereInput>,
  sesiones_some?: Maybe<SesionWhereInput>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  venue?: Maybe<VenueWhereInput>,
};

export type SpaceWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Titulacion = {
   __typename?: 'Titulacion',
  asignaturas?: Maybe<Array<Asignatura>>,
  code: Scalars['String'],
  createdAt: Scalars['DateTime'],
  description?: Maybe<Scalars['String']>,
  estudio: Estudio,
  id: Scalars['ID'],
  name: Scalars['String'],
  shortName: Scalars['String'],
  updatedAt: Scalars['DateTime'],
};


export type TitulacionAsignaturasArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<AsignaturaOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<AsignaturaWhereInput>
};

export type TitulacionConnection = {
   __typename?: 'TitulacionConnection',
  aggregate: AggregateTitulacion,
  edges: Array<TitulacionEdge>,
  pageInfo: PageInfo,
};

export type TitulacionCreateInput = {
  asignaturas?: Maybe<AsignaturaCreateManyWithoutTitulacionInput>,
  code: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  estudio: EstudioCreateOneWithoutTitulacionesInput,
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  shortName: Scalars['String'],
};

export type TitulacionCreateManyWithoutEstudioInput = {
  connect?: Maybe<Array<TitulacionWhereUniqueInput>>,
  create?: Maybe<Array<TitulacionCreateWithoutEstudioInput>>,
};

export type TitulacionCreateOneWithoutAsignaturasInput = {
  connect?: Maybe<TitulacionWhereUniqueInput>,
  create?: Maybe<TitulacionCreateWithoutAsignaturasInput>,
};

export type TitulacionCreateWithoutAsignaturasInput = {
  code: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  estudio: EstudioCreateOneWithoutTitulacionesInput,
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  shortName: Scalars['String'],
};

export type TitulacionCreateWithoutEstudioInput = {
  asignaturas?: Maybe<AsignaturaCreateManyWithoutTitulacionInput>,
  code: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  shortName: Scalars['String'],
};

export type TitulacionEdge = {
   __typename?: 'TitulacionEdge',
  cursor: Scalars['String'],
  node: Titulacion,
};

export enum TitulacionOrderByInput {
  CodeAsc = 'code_ASC',
  CodeDesc = 'code_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ShortNameAsc = 'shortName_ASC',
  ShortNameDesc = 'shortName_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type TitulacionScalarWhereInput = {
  AND?: Maybe<Array<TitulacionScalarWhereInput>>,
  code?: Maybe<Scalars['String']>,
  code_contains?: Maybe<Scalars['String']>,
  code_ends_with?: Maybe<Scalars['String']>,
  code_gt?: Maybe<Scalars['String']>,
  code_gte?: Maybe<Scalars['String']>,
  code_in?: Maybe<Array<Scalars['String']>>,
  code_lt?: Maybe<Scalars['String']>,
  code_lte?: Maybe<Scalars['String']>,
  code_not?: Maybe<Scalars['String']>,
  code_not_contains?: Maybe<Scalars['String']>,
  code_not_ends_with?: Maybe<Scalars['String']>,
  code_not_in?: Maybe<Array<Scalars['String']>>,
  code_not_starts_with?: Maybe<Scalars['String']>,
  code_starts_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  description?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<TitulacionScalarWhereInput>>,
  OR?: Maybe<Array<TitulacionScalarWhereInput>>,
  shortName?: Maybe<Scalars['String']>,
  shortName_contains?: Maybe<Scalars['String']>,
  shortName_ends_with?: Maybe<Scalars['String']>,
  shortName_gt?: Maybe<Scalars['String']>,
  shortName_gte?: Maybe<Scalars['String']>,
  shortName_in?: Maybe<Array<Scalars['String']>>,
  shortName_lt?: Maybe<Scalars['String']>,
  shortName_lte?: Maybe<Scalars['String']>,
  shortName_not?: Maybe<Scalars['String']>,
  shortName_not_contains?: Maybe<Scalars['String']>,
  shortName_not_ends_with?: Maybe<Scalars['String']>,
  shortName_not_in?: Maybe<Array<Scalars['String']>>,
  shortName_not_starts_with?: Maybe<Scalars['String']>,
  shortName_starts_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type TitulacionUpdateInput = {
  asignaturas?: Maybe<AsignaturaUpdateManyWithoutTitulacionInput>,
  code?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  estudio?: Maybe<EstudioUpdateOneRequiredWithoutTitulacionesInput>,
  name?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
};

export type TitulacionUpdateManyDataInput = {
  code?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
};

export type TitulacionUpdateManyMutationInput = {
  code?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
};

export type TitulacionUpdateManyWithoutEstudioInput = {
  connect?: Maybe<Array<TitulacionWhereUniqueInput>>,
  create?: Maybe<Array<TitulacionCreateWithoutEstudioInput>>,
  delete?: Maybe<Array<TitulacionWhereUniqueInput>>,
  deleteMany?: Maybe<Array<TitulacionScalarWhereInput>>,
  disconnect?: Maybe<Array<TitulacionWhereUniqueInput>>,
  set?: Maybe<Array<TitulacionWhereUniqueInput>>,
  update?: Maybe<Array<TitulacionUpdateWithWhereUniqueWithoutEstudioInput>>,
  updateMany?: Maybe<Array<TitulacionUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<TitulacionUpsertWithWhereUniqueWithoutEstudioInput>>,
};

export type TitulacionUpdateManyWithWhereNestedInput = {
  data: TitulacionUpdateManyDataInput,
  where: TitulacionScalarWhereInput,
};

export type TitulacionUpdateOneRequiredWithoutAsignaturasInput = {
  connect?: Maybe<TitulacionWhereUniqueInput>,
  create?: Maybe<TitulacionCreateWithoutAsignaturasInput>,
  update?: Maybe<TitulacionUpdateWithoutAsignaturasDataInput>,
  upsert?: Maybe<TitulacionUpsertWithoutAsignaturasInput>,
};

export type TitulacionUpdateWithoutAsignaturasDataInput = {
  code?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  estudio?: Maybe<EstudioUpdateOneRequiredWithoutTitulacionesInput>,
  name?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
};

export type TitulacionUpdateWithoutEstudioDataInput = {
  asignaturas?: Maybe<AsignaturaUpdateManyWithoutTitulacionInput>,
  code?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
};

export type TitulacionUpdateWithWhereUniqueWithoutEstudioInput = {
  data: TitulacionUpdateWithoutEstudioDataInput,
  where: TitulacionWhereUniqueInput,
};

export type TitulacionUpsertWithoutAsignaturasInput = {
  create: TitulacionCreateWithoutAsignaturasInput,
  update: TitulacionUpdateWithoutAsignaturasDataInput,
};

export type TitulacionUpsertWithWhereUniqueWithoutEstudioInput = {
  create: TitulacionCreateWithoutEstudioInput,
  update: TitulacionUpdateWithoutEstudioDataInput,
  where: TitulacionWhereUniqueInput,
};

export type TitulacionWhereInput = {
  AND?: Maybe<Array<TitulacionWhereInput>>,
  asignaturas_every?: Maybe<AsignaturaWhereInput>,
  asignaturas_none?: Maybe<AsignaturaWhereInput>,
  asignaturas_some?: Maybe<AsignaturaWhereInput>,
  code?: Maybe<Scalars['String']>,
  code_contains?: Maybe<Scalars['String']>,
  code_ends_with?: Maybe<Scalars['String']>,
  code_gt?: Maybe<Scalars['String']>,
  code_gte?: Maybe<Scalars['String']>,
  code_in?: Maybe<Array<Scalars['String']>>,
  code_lt?: Maybe<Scalars['String']>,
  code_lte?: Maybe<Scalars['String']>,
  code_not?: Maybe<Scalars['String']>,
  code_not_contains?: Maybe<Scalars['String']>,
  code_not_ends_with?: Maybe<Scalars['String']>,
  code_not_in?: Maybe<Array<Scalars['String']>>,
  code_not_starts_with?: Maybe<Scalars['String']>,
  code_starts_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  description?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  estudio?: Maybe<EstudioWhereInput>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<TitulacionWhereInput>>,
  OR?: Maybe<Array<TitulacionWhereInput>>,
  shortName?: Maybe<Scalars['String']>,
  shortName_contains?: Maybe<Scalars['String']>,
  shortName_ends_with?: Maybe<Scalars['String']>,
  shortName_gt?: Maybe<Scalars['String']>,
  shortName_gte?: Maybe<Scalars['String']>,
  shortName_in?: Maybe<Array<Scalars['String']>>,
  shortName_lt?: Maybe<Scalars['String']>,
  shortName_lte?: Maybe<Scalars['String']>,
  shortName_not?: Maybe<Scalars['String']>,
  shortName_not_contains?: Maybe<Scalars['String']>,
  shortName_not_ends_with?: Maybe<Scalars['String']>,
  shortName_not_in?: Maybe<Array<Scalars['String']>>,
  shortName_not_starts_with?: Maybe<Scalars['String']>,
  shortName_starts_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type TitulacionWhereUniqueInput = {
  code?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
};

export type Transaction = {
   __typename?: 'Transaction',
  amount: Scalars['Int'],
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  order?: Maybe<Order>,
  reference?: Maybe<Scalars['String']>,
  type: TxType,
  updatedAt: Scalars['DateTime'],
};

export type TransactionConnection = {
   __typename?: 'TransactionConnection',
  aggregate: AggregateTransaction,
  edges: Array<TransactionEdge>,
  pageInfo: PageInfo,
};

export type TransactionCreateInput = {
  amount: Scalars['Int'],
  id?: Maybe<Scalars['ID']>,
  order?: Maybe<OrderCreateOneWithoutTransactionsInput>,
  reference?: Maybe<Scalars['String']>,
  type?: Maybe<TxType>,
};

export type TransactionCreateManyWithoutOrderInput = {
  connect?: Maybe<Array<TransactionWhereUniqueInput>>,
  create?: Maybe<Array<TransactionCreateWithoutOrderInput>>,
};

export type TransactionCreateWithoutOrderInput = {
  amount: Scalars['Int'],
  id?: Maybe<Scalars['ID']>,
  reference?: Maybe<Scalars['String']>,
  type?: Maybe<TxType>,
};

export type TransactionEdge = {
   __typename?: 'TransactionEdge',
  cursor: Scalars['String'],
  node: Transaction,
};

export enum TransactionOrderByInput {
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ReferenceAsc = 'reference_ASC',
  ReferenceDesc = 'reference_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type TransactionScalarWhereInput = {
  amount?: Maybe<Scalars['Int']>,
  amount_gt?: Maybe<Scalars['Int']>,
  amount_gte?: Maybe<Scalars['Int']>,
  amount_in?: Maybe<Array<Scalars['Int']>>,
  amount_lt?: Maybe<Scalars['Int']>,
  amount_lte?: Maybe<Scalars['Int']>,
  amount_not?: Maybe<Scalars['Int']>,
  amount_not_in?: Maybe<Array<Scalars['Int']>>,
  AND?: Maybe<Array<TransactionScalarWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  NOT?: Maybe<Array<TransactionScalarWhereInput>>,
  OR?: Maybe<Array<TransactionScalarWhereInput>>,
  reference?: Maybe<Scalars['String']>,
  reference_contains?: Maybe<Scalars['String']>,
  reference_ends_with?: Maybe<Scalars['String']>,
  reference_gt?: Maybe<Scalars['String']>,
  reference_gte?: Maybe<Scalars['String']>,
  reference_in?: Maybe<Array<Scalars['String']>>,
  reference_lt?: Maybe<Scalars['String']>,
  reference_lte?: Maybe<Scalars['String']>,
  reference_not?: Maybe<Scalars['String']>,
  reference_not_contains?: Maybe<Scalars['String']>,
  reference_not_ends_with?: Maybe<Scalars['String']>,
  reference_not_in?: Maybe<Array<Scalars['String']>>,
  reference_not_starts_with?: Maybe<Scalars['String']>,
  reference_starts_with?: Maybe<Scalars['String']>,
  type?: Maybe<TxType>,
  type_in?: Maybe<Array<TxType>>,
  type_not?: Maybe<TxType>,
  type_not_in?: Maybe<Array<TxType>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type TransactionUpdateInput = {
  amount?: Maybe<Scalars['Int']>,
  order?: Maybe<OrderUpdateOneWithoutTransactionsInput>,
  reference?: Maybe<Scalars['String']>,
  type?: Maybe<TxType>,
};

export type TransactionUpdateManyDataInput = {
  amount?: Maybe<Scalars['Int']>,
  reference?: Maybe<Scalars['String']>,
  type?: Maybe<TxType>,
};

export type TransactionUpdateManyMutationInput = {
  amount?: Maybe<Scalars['Int']>,
  reference?: Maybe<Scalars['String']>,
  type?: Maybe<TxType>,
};

export type TransactionUpdateManyWithoutOrderInput = {
  connect?: Maybe<Array<TransactionWhereUniqueInput>>,
  create?: Maybe<Array<TransactionCreateWithoutOrderInput>>,
  delete?: Maybe<Array<TransactionWhereUniqueInput>>,
  deleteMany?: Maybe<Array<TransactionScalarWhereInput>>,
  disconnect?: Maybe<Array<TransactionWhereUniqueInput>>,
  set?: Maybe<Array<TransactionWhereUniqueInput>>,
  update?: Maybe<Array<TransactionUpdateWithWhereUniqueWithoutOrderInput>>,
  updateMany?: Maybe<Array<TransactionUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<TransactionUpsertWithWhereUniqueWithoutOrderInput>>,
};

export type TransactionUpdateManyWithWhereNestedInput = {
  data: TransactionUpdateManyDataInput,
  where: TransactionScalarWhereInput,
};

export type TransactionUpdateWithoutOrderDataInput = {
  amount?: Maybe<Scalars['Int']>,
  reference?: Maybe<Scalars['String']>,
  type?: Maybe<TxType>,
};

export type TransactionUpdateWithWhereUniqueWithoutOrderInput = {
  data: TransactionUpdateWithoutOrderDataInput,
  where: TransactionWhereUniqueInput,
};

export type TransactionUpsertWithWhereUniqueWithoutOrderInput = {
  create: TransactionCreateWithoutOrderInput,
  update: TransactionUpdateWithoutOrderDataInput,
  where: TransactionWhereUniqueInput,
};

export type TransactionWhereInput = {
  amount?: Maybe<Scalars['Int']>,
  amount_gt?: Maybe<Scalars['Int']>,
  amount_gte?: Maybe<Scalars['Int']>,
  amount_in?: Maybe<Array<Scalars['Int']>>,
  amount_lt?: Maybe<Scalars['Int']>,
  amount_lte?: Maybe<Scalars['Int']>,
  amount_not?: Maybe<Scalars['Int']>,
  amount_not_in?: Maybe<Array<Scalars['Int']>>,
  AND?: Maybe<Array<TransactionWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  NOT?: Maybe<Array<TransactionWhereInput>>,
  OR?: Maybe<Array<TransactionWhereInput>>,
  order?: Maybe<OrderWhereInput>,
  reference?: Maybe<Scalars['String']>,
  reference_contains?: Maybe<Scalars['String']>,
  reference_ends_with?: Maybe<Scalars['String']>,
  reference_gt?: Maybe<Scalars['String']>,
  reference_gte?: Maybe<Scalars['String']>,
  reference_in?: Maybe<Array<Scalars['String']>>,
  reference_lt?: Maybe<Scalars['String']>,
  reference_lte?: Maybe<Scalars['String']>,
  reference_not?: Maybe<Scalars['String']>,
  reference_not_contains?: Maybe<Scalars['String']>,
  reference_not_ends_with?: Maybe<Scalars['String']>,
  reference_not_in?: Maybe<Array<Scalars['String']>>,
  reference_not_starts_with?: Maybe<Scalars['String']>,
  reference_starts_with?: Maybe<Scalars['String']>,
  type?: Maybe<TxType>,
  type_in?: Maybe<Array<TxType>>,
  type_not?: Maybe<TxType>,
  type_not_in?: Maybe<Array<TxType>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type TransactionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export enum TxType {
  Payment = 'PAYMENT',
  Purchase = 'PURCHASE',
  Receipt = 'RECEIPT',
  Sale = 'SALE'
}

export type User = {
   __typename?: 'User',
  addresses?: Maybe<Array<Address>>,
  asistencias?: Maybe<Array<Asistencia>>,
  avatar?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  department?: Maybe<Department>,
  devices?: Maybe<Array<Device>>,
  discountRequests?: Maybe<Array<DiscountRequest>>,
  email: Scalars['String'],
  emailVerified: Scalars['Boolean'],
  events?: Maybe<Array<Event>>,
  firstname: Scalars['String'],
  fullname: Scalars['String'],
  group: UserGroup,
  groupRequest?: Maybe<UserGroup>,
  id: Scalars['ID'],
  isAdmin: Scalars['Boolean'],
  lastname: Scalars['String'],
  leccionesDisponibles?: Maybe<Array<Leccion>>,
  leccionesGestionadas?: Maybe<Array<Leccion>>,
  matriculas?: Maybe<Array<Matricula>>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<Array<News>>,
  officialDocuments?: Maybe<Array<OfficialDocument>>,
  password: Scalars['String'],
  roles?: Maybe<Array<Role>>,
  sesiones?: Maybe<Array<Sesion>>,
  socialNetworkLinks?: Maybe<Array<SocialLink>>,
  updatedAt: Scalars['DateTime'],
};


export type UserAddressesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<AddressOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<AddressWhereInput>
};


export type UserAsistenciasArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<AsistenciaOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<AsistenciaWhereInput>
};


export type UserDevicesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<DeviceOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<DeviceWhereInput>
};


export type UserDiscountRequestsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<DiscountRequestOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<DiscountRequestWhereInput>
};


export type UserEventsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<EventOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<EventWhereInput>
};


export type UserLeccionesDisponiblesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<LeccionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<LeccionWhereInput>
};


export type UserLeccionesGestionadasArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<LeccionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<LeccionWhereInput>
};


export type UserMatriculasArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<MatriculaOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<MatriculaWhereInput>
};


export type UserNewsesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<NewsOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<NewsWhereInput>
};


export type UserOfficialDocumentsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<OfficialDocumentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<OfficialDocumentWhereInput>
};


export type UserRolesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<RoleOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<RoleWhereInput>
};


export type UserSesionesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<SesionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<SesionWhereInput>
};


export type UserSocialNetworkLinksArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<SocialLinkOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<SocialLinkWhereInput>
};

export type UserConnection = {
   __typename?: 'UserConnection',
  aggregate: AggregateUser,
  edges: Array<UserEdge>,
  pageInfo: PageInfo,
};

export type UserCreateInput = {
  addresses?: Maybe<AddressCreateManyWithoutOwnerInput>,
  asistencias?: Maybe<AsistenciaCreateManyWithoutEstudianteInput>,
  avatar?: Maybe<Scalars['String']>,
  department?: Maybe<DepartmentCreateOneWithoutMembersInput>,
  devices?: Maybe<DeviceCreateManyWithoutOwnerInput>,
  discountRequests?: Maybe<DiscountRequestCreateManyWithoutUserInput>,
  email: Scalars['String'],
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventCreateManyWithoutAuthorInput>,
  firstname: Scalars['String'],
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  id?: Maybe<Scalars['ID']>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname: Scalars['String'],
  leccionesDisponibles?: Maybe<LeccionCreateManyWithoutProfesoresDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionCreateManyWithoutGestorInput>,
  matriculas?: Maybe<MatriculaCreateManyWithoutAlumnoInput>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<NewsCreateManyWithoutAuthorInput>,
  officialDocuments?: Maybe<OfficialDocumentCreateManyWithoutOwnerInput>,
  password: Scalars['String'],
  roles?: Maybe<RoleCreateManyWithoutUsersInput>,
  sesiones?: Maybe<SesionCreateManyWithoutByInput>,
  socialNetworkLinks?: Maybe<SocialLinkCreateManyWithoutOwnerInput>,
};

export type UserCreateManyWithoutDepartmentInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>,
  create?: Maybe<Array<UserCreateWithoutDepartmentInput>>,
};

export type UserCreateManyWithoutLeccionesDisponiblesInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>,
  create?: Maybe<Array<UserCreateWithoutLeccionesDisponiblesInput>>,
};

export type UserCreateManyWithoutRolesInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>,
  create?: Maybe<Array<UserCreateWithoutRolesInput>>,
};

export type UserCreateOneInput = {
  connect?: Maybe<UserWhereUniqueInput>,
  create?: Maybe<UserCreateInput>,
};

export type UserCreateOneWithoutAddressesInput = {
  connect?: Maybe<UserWhereUniqueInput>,
  create?: Maybe<UserCreateWithoutAddressesInput>,
};

export type UserCreateOneWithoutAsistenciasInput = {
  connect?: Maybe<UserWhereUniqueInput>,
  create?: Maybe<UserCreateWithoutAsistenciasInput>,
};

export type UserCreateOneWithoutDevicesInput = {
  connect?: Maybe<UserWhereUniqueInput>,
  create?: Maybe<UserCreateWithoutDevicesInput>,
};

export type UserCreateOneWithoutDiscountRequestsInput = {
  connect?: Maybe<UserWhereUniqueInput>,
  create?: Maybe<UserCreateWithoutDiscountRequestsInput>,
};

export type UserCreateOneWithoutEventsInput = {
  connect?: Maybe<UserWhereUniqueInput>,
  create?: Maybe<UserCreateWithoutEventsInput>,
};

export type UserCreateOneWithoutLeccionesGestionadasInput = {
  connect?: Maybe<UserWhereUniqueInput>,
  create?: Maybe<UserCreateWithoutLeccionesGestionadasInput>,
};

export type UserCreateOneWithoutMatriculasInput = {
  connect?: Maybe<UserWhereUniqueInput>,
  create?: Maybe<UserCreateWithoutMatriculasInput>,
};

export type UserCreateOneWithoutNewsesInput = {
  connect?: Maybe<UserWhereUniqueInput>,
  create?: Maybe<UserCreateWithoutNewsesInput>,
};

export type UserCreateOneWithoutOfficialDocumentsInput = {
  connect?: Maybe<UserWhereUniqueInput>,
  create?: Maybe<UserCreateWithoutOfficialDocumentsInput>,
};

export type UserCreateOneWithoutSesionesInput = {
  connect?: Maybe<UserWhereUniqueInput>,
  create?: Maybe<UserCreateWithoutSesionesInput>,
};

export type UserCreateOneWithoutSocialNetworkLinksInput = {
  connect?: Maybe<UserWhereUniqueInput>,
  create?: Maybe<UserCreateWithoutSocialNetworkLinksInput>,
};

export type UserCreateWithoutAddressesInput = {
  asistencias?: Maybe<AsistenciaCreateManyWithoutEstudianteInput>,
  avatar?: Maybe<Scalars['String']>,
  department?: Maybe<DepartmentCreateOneWithoutMembersInput>,
  devices?: Maybe<DeviceCreateManyWithoutOwnerInput>,
  discountRequests?: Maybe<DiscountRequestCreateManyWithoutUserInput>,
  email: Scalars['String'],
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventCreateManyWithoutAuthorInput>,
  firstname: Scalars['String'],
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  id?: Maybe<Scalars['ID']>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname: Scalars['String'],
  leccionesDisponibles?: Maybe<LeccionCreateManyWithoutProfesoresDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionCreateManyWithoutGestorInput>,
  matriculas?: Maybe<MatriculaCreateManyWithoutAlumnoInput>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<NewsCreateManyWithoutAuthorInput>,
  officialDocuments?: Maybe<OfficialDocumentCreateManyWithoutOwnerInput>,
  password: Scalars['String'],
  roles?: Maybe<RoleCreateManyWithoutUsersInput>,
  sesiones?: Maybe<SesionCreateManyWithoutByInput>,
  socialNetworkLinks?: Maybe<SocialLinkCreateManyWithoutOwnerInput>,
};

export type UserCreateWithoutAsistenciasInput = {
  addresses?: Maybe<AddressCreateManyWithoutOwnerInput>,
  avatar?: Maybe<Scalars['String']>,
  department?: Maybe<DepartmentCreateOneWithoutMembersInput>,
  devices?: Maybe<DeviceCreateManyWithoutOwnerInput>,
  discountRequests?: Maybe<DiscountRequestCreateManyWithoutUserInput>,
  email: Scalars['String'],
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventCreateManyWithoutAuthorInput>,
  firstname: Scalars['String'],
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  id?: Maybe<Scalars['ID']>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname: Scalars['String'],
  leccionesDisponibles?: Maybe<LeccionCreateManyWithoutProfesoresDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionCreateManyWithoutGestorInput>,
  matriculas?: Maybe<MatriculaCreateManyWithoutAlumnoInput>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<NewsCreateManyWithoutAuthorInput>,
  officialDocuments?: Maybe<OfficialDocumentCreateManyWithoutOwnerInput>,
  password: Scalars['String'],
  roles?: Maybe<RoleCreateManyWithoutUsersInput>,
  sesiones?: Maybe<SesionCreateManyWithoutByInput>,
  socialNetworkLinks?: Maybe<SocialLinkCreateManyWithoutOwnerInput>,
};

export type UserCreateWithoutDepartmentInput = {
  addresses?: Maybe<AddressCreateManyWithoutOwnerInput>,
  asistencias?: Maybe<AsistenciaCreateManyWithoutEstudianteInput>,
  avatar?: Maybe<Scalars['String']>,
  devices?: Maybe<DeviceCreateManyWithoutOwnerInput>,
  discountRequests?: Maybe<DiscountRequestCreateManyWithoutUserInput>,
  email: Scalars['String'],
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventCreateManyWithoutAuthorInput>,
  firstname: Scalars['String'],
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  id?: Maybe<Scalars['ID']>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname: Scalars['String'],
  leccionesDisponibles?: Maybe<LeccionCreateManyWithoutProfesoresDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionCreateManyWithoutGestorInput>,
  matriculas?: Maybe<MatriculaCreateManyWithoutAlumnoInput>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<NewsCreateManyWithoutAuthorInput>,
  officialDocuments?: Maybe<OfficialDocumentCreateManyWithoutOwnerInput>,
  password: Scalars['String'],
  roles?: Maybe<RoleCreateManyWithoutUsersInput>,
  sesiones?: Maybe<SesionCreateManyWithoutByInput>,
  socialNetworkLinks?: Maybe<SocialLinkCreateManyWithoutOwnerInput>,
};

export type UserCreateWithoutDevicesInput = {
  addresses?: Maybe<AddressCreateManyWithoutOwnerInput>,
  asistencias?: Maybe<AsistenciaCreateManyWithoutEstudianteInput>,
  avatar?: Maybe<Scalars['String']>,
  department?: Maybe<DepartmentCreateOneWithoutMembersInput>,
  discountRequests?: Maybe<DiscountRequestCreateManyWithoutUserInput>,
  email: Scalars['String'],
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventCreateManyWithoutAuthorInput>,
  firstname: Scalars['String'],
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  id?: Maybe<Scalars['ID']>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname: Scalars['String'],
  leccionesDisponibles?: Maybe<LeccionCreateManyWithoutProfesoresDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionCreateManyWithoutGestorInput>,
  matriculas?: Maybe<MatriculaCreateManyWithoutAlumnoInput>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<NewsCreateManyWithoutAuthorInput>,
  officialDocuments?: Maybe<OfficialDocumentCreateManyWithoutOwnerInput>,
  password: Scalars['String'],
  roles?: Maybe<RoleCreateManyWithoutUsersInput>,
  sesiones?: Maybe<SesionCreateManyWithoutByInput>,
  socialNetworkLinks?: Maybe<SocialLinkCreateManyWithoutOwnerInput>,
};

export type UserCreateWithoutDiscountRequestsInput = {
  addresses?: Maybe<AddressCreateManyWithoutOwnerInput>,
  asistencias?: Maybe<AsistenciaCreateManyWithoutEstudianteInput>,
  avatar?: Maybe<Scalars['String']>,
  department?: Maybe<DepartmentCreateOneWithoutMembersInput>,
  devices?: Maybe<DeviceCreateManyWithoutOwnerInput>,
  email: Scalars['String'],
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventCreateManyWithoutAuthorInput>,
  firstname: Scalars['String'],
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  id?: Maybe<Scalars['ID']>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname: Scalars['String'],
  leccionesDisponibles?: Maybe<LeccionCreateManyWithoutProfesoresDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionCreateManyWithoutGestorInput>,
  matriculas?: Maybe<MatriculaCreateManyWithoutAlumnoInput>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<NewsCreateManyWithoutAuthorInput>,
  officialDocuments?: Maybe<OfficialDocumentCreateManyWithoutOwnerInput>,
  password: Scalars['String'],
  roles?: Maybe<RoleCreateManyWithoutUsersInput>,
  sesiones?: Maybe<SesionCreateManyWithoutByInput>,
  socialNetworkLinks?: Maybe<SocialLinkCreateManyWithoutOwnerInput>,
};

export type UserCreateWithoutEventsInput = {
  addresses?: Maybe<AddressCreateManyWithoutOwnerInput>,
  asistencias?: Maybe<AsistenciaCreateManyWithoutEstudianteInput>,
  avatar?: Maybe<Scalars['String']>,
  department?: Maybe<DepartmentCreateOneWithoutMembersInput>,
  devices?: Maybe<DeviceCreateManyWithoutOwnerInput>,
  discountRequests?: Maybe<DiscountRequestCreateManyWithoutUserInput>,
  email: Scalars['String'],
  emailVerified?: Maybe<Scalars['Boolean']>,
  firstname: Scalars['String'],
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  id?: Maybe<Scalars['ID']>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname: Scalars['String'],
  leccionesDisponibles?: Maybe<LeccionCreateManyWithoutProfesoresDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionCreateManyWithoutGestorInput>,
  matriculas?: Maybe<MatriculaCreateManyWithoutAlumnoInput>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<NewsCreateManyWithoutAuthorInput>,
  officialDocuments?: Maybe<OfficialDocumentCreateManyWithoutOwnerInput>,
  password: Scalars['String'],
  roles?: Maybe<RoleCreateManyWithoutUsersInput>,
  sesiones?: Maybe<SesionCreateManyWithoutByInput>,
  socialNetworkLinks?: Maybe<SocialLinkCreateManyWithoutOwnerInput>,
};

export type UserCreateWithoutLeccionesDisponiblesInput = {
  addresses?: Maybe<AddressCreateManyWithoutOwnerInput>,
  asistencias?: Maybe<AsistenciaCreateManyWithoutEstudianteInput>,
  avatar?: Maybe<Scalars['String']>,
  department?: Maybe<DepartmentCreateOneWithoutMembersInput>,
  devices?: Maybe<DeviceCreateManyWithoutOwnerInput>,
  discountRequests?: Maybe<DiscountRequestCreateManyWithoutUserInput>,
  email: Scalars['String'],
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventCreateManyWithoutAuthorInput>,
  firstname: Scalars['String'],
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  id?: Maybe<Scalars['ID']>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname: Scalars['String'],
  leccionesGestionadas?: Maybe<LeccionCreateManyWithoutGestorInput>,
  matriculas?: Maybe<MatriculaCreateManyWithoutAlumnoInput>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<NewsCreateManyWithoutAuthorInput>,
  officialDocuments?: Maybe<OfficialDocumentCreateManyWithoutOwnerInput>,
  password: Scalars['String'],
  roles?: Maybe<RoleCreateManyWithoutUsersInput>,
  sesiones?: Maybe<SesionCreateManyWithoutByInput>,
  socialNetworkLinks?: Maybe<SocialLinkCreateManyWithoutOwnerInput>,
};

export type UserCreateWithoutLeccionesGestionadasInput = {
  addresses?: Maybe<AddressCreateManyWithoutOwnerInput>,
  asistencias?: Maybe<AsistenciaCreateManyWithoutEstudianteInput>,
  avatar?: Maybe<Scalars['String']>,
  department?: Maybe<DepartmentCreateOneWithoutMembersInput>,
  devices?: Maybe<DeviceCreateManyWithoutOwnerInput>,
  discountRequests?: Maybe<DiscountRequestCreateManyWithoutUserInput>,
  email: Scalars['String'],
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventCreateManyWithoutAuthorInput>,
  firstname: Scalars['String'],
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  id?: Maybe<Scalars['ID']>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname: Scalars['String'],
  leccionesDisponibles?: Maybe<LeccionCreateManyWithoutProfesoresDisponiblesInput>,
  matriculas?: Maybe<MatriculaCreateManyWithoutAlumnoInput>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<NewsCreateManyWithoutAuthorInput>,
  officialDocuments?: Maybe<OfficialDocumentCreateManyWithoutOwnerInput>,
  password: Scalars['String'],
  roles?: Maybe<RoleCreateManyWithoutUsersInput>,
  sesiones?: Maybe<SesionCreateManyWithoutByInput>,
  socialNetworkLinks?: Maybe<SocialLinkCreateManyWithoutOwnerInput>,
};

export type UserCreateWithoutMatriculasInput = {
  addresses?: Maybe<AddressCreateManyWithoutOwnerInput>,
  asistencias?: Maybe<AsistenciaCreateManyWithoutEstudianteInput>,
  avatar?: Maybe<Scalars['String']>,
  department?: Maybe<DepartmentCreateOneWithoutMembersInput>,
  devices?: Maybe<DeviceCreateManyWithoutOwnerInput>,
  discountRequests?: Maybe<DiscountRequestCreateManyWithoutUserInput>,
  email: Scalars['String'],
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventCreateManyWithoutAuthorInput>,
  firstname: Scalars['String'],
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  id?: Maybe<Scalars['ID']>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname: Scalars['String'],
  leccionesDisponibles?: Maybe<LeccionCreateManyWithoutProfesoresDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionCreateManyWithoutGestorInput>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<NewsCreateManyWithoutAuthorInput>,
  officialDocuments?: Maybe<OfficialDocumentCreateManyWithoutOwnerInput>,
  password: Scalars['String'],
  roles?: Maybe<RoleCreateManyWithoutUsersInput>,
  sesiones?: Maybe<SesionCreateManyWithoutByInput>,
  socialNetworkLinks?: Maybe<SocialLinkCreateManyWithoutOwnerInput>,
};

export type UserCreateWithoutNewsesInput = {
  addresses?: Maybe<AddressCreateManyWithoutOwnerInput>,
  asistencias?: Maybe<AsistenciaCreateManyWithoutEstudianteInput>,
  avatar?: Maybe<Scalars['String']>,
  department?: Maybe<DepartmentCreateOneWithoutMembersInput>,
  devices?: Maybe<DeviceCreateManyWithoutOwnerInput>,
  discountRequests?: Maybe<DiscountRequestCreateManyWithoutUserInput>,
  email: Scalars['String'],
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventCreateManyWithoutAuthorInput>,
  firstname: Scalars['String'],
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  id?: Maybe<Scalars['ID']>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname: Scalars['String'],
  leccionesDisponibles?: Maybe<LeccionCreateManyWithoutProfesoresDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionCreateManyWithoutGestorInput>,
  matriculas?: Maybe<MatriculaCreateManyWithoutAlumnoInput>,
  metadata?: Maybe<Scalars['Json']>,
  officialDocuments?: Maybe<OfficialDocumentCreateManyWithoutOwnerInput>,
  password: Scalars['String'],
  roles?: Maybe<RoleCreateManyWithoutUsersInput>,
  sesiones?: Maybe<SesionCreateManyWithoutByInput>,
  socialNetworkLinks?: Maybe<SocialLinkCreateManyWithoutOwnerInput>,
};

export type UserCreateWithoutOfficialDocumentsInput = {
  addresses?: Maybe<AddressCreateManyWithoutOwnerInput>,
  asistencias?: Maybe<AsistenciaCreateManyWithoutEstudianteInput>,
  avatar?: Maybe<Scalars['String']>,
  department?: Maybe<DepartmentCreateOneWithoutMembersInput>,
  devices?: Maybe<DeviceCreateManyWithoutOwnerInput>,
  discountRequests?: Maybe<DiscountRequestCreateManyWithoutUserInput>,
  email: Scalars['String'],
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventCreateManyWithoutAuthorInput>,
  firstname: Scalars['String'],
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  id?: Maybe<Scalars['ID']>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname: Scalars['String'],
  leccionesDisponibles?: Maybe<LeccionCreateManyWithoutProfesoresDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionCreateManyWithoutGestorInput>,
  matriculas?: Maybe<MatriculaCreateManyWithoutAlumnoInput>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<NewsCreateManyWithoutAuthorInput>,
  password: Scalars['String'],
  roles?: Maybe<RoleCreateManyWithoutUsersInput>,
  sesiones?: Maybe<SesionCreateManyWithoutByInput>,
  socialNetworkLinks?: Maybe<SocialLinkCreateManyWithoutOwnerInput>,
};

export type UserCreateWithoutRolesInput = {
  addresses?: Maybe<AddressCreateManyWithoutOwnerInput>,
  asistencias?: Maybe<AsistenciaCreateManyWithoutEstudianteInput>,
  avatar?: Maybe<Scalars['String']>,
  department?: Maybe<DepartmentCreateOneWithoutMembersInput>,
  devices?: Maybe<DeviceCreateManyWithoutOwnerInput>,
  discountRequests?: Maybe<DiscountRequestCreateManyWithoutUserInput>,
  email: Scalars['String'],
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventCreateManyWithoutAuthorInput>,
  firstname: Scalars['String'],
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  id?: Maybe<Scalars['ID']>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname: Scalars['String'],
  leccionesDisponibles?: Maybe<LeccionCreateManyWithoutProfesoresDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionCreateManyWithoutGestorInput>,
  matriculas?: Maybe<MatriculaCreateManyWithoutAlumnoInput>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<NewsCreateManyWithoutAuthorInput>,
  officialDocuments?: Maybe<OfficialDocumentCreateManyWithoutOwnerInput>,
  password: Scalars['String'],
  sesiones?: Maybe<SesionCreateManyWithoutByInput>,
  socialNetworkLinks?: Maybe<SocialLinkCreateManyWithoutOwnerInput>,
};

export type UserCreateWithoutSesionesInput = {
  addresses?: Maybe<AddressCreateManyWithoutOwnerInput>,
  asistencias?: Maybe<AsistenciaCreateManyWithoutEstudianteInput>,
  avatar?: Maybe<Scalars['String']>,
  department?: Maybe<DepartmentCreateOneWithoutMembersInput>,
  devices?: Maybe<DeviceCreateManyWithoutOwnerInput>,
  discountRequests?: Maybe<DiscountRequestCreateManyWithoutUserInput>,
  email: Scalars['String'],
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventCreateManyWithoutAuthorInput>,
  firstname: Scalars['String'],
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  id?: Maybe<Scalars['ID']>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname: Scalars['String'],
  leccionesDisponibles?: Maybe<LeccionCreateManyWithoutProfesoresDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionCreateManyWithoutGestorInput>,
  matriculas?: Maybe<MatriculaCreateManyWithoutAlumnoInput>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<NewsCreateManyWithoutAuthorInput>,
  officialDocuments?: Maybe<OfficialDocumentCreateManyWithoutOwnerInput>,
  password: Scalars['String'],
  roles?: Maybe<RoleCreateManyWithoutUsersInput>,
  socialNetworkLinks?: Maybe<SocialLinkCreateManyWithoutOwnerInput>,
};

export type UserCreateWithoutSocialNetworkLinksInput = {
  addresses?: Maybe<AddressCreateManyWithoutOwnerInput>,
  asistencias?: Maybe<AsistenciaCreateManyWithoutEstudianteInput>,
  avatar?: Maybe<Scalars['String']>,
  department?: Maybe<DepartmentCreateOneWithoutMembersInput>,
  devices?: Maybe<DeviceCreateManyWithoutOwnerInput>,
  discountRequests?: Maybe<DiscountRequestCreateManyWithoutUserInput>,
  email: Scalars['String'],
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventCreateManyWithoutAuthorInput>,
  firstname: Scalars['String'],
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  id?: Maybe<Scalars['ID']>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname: Scalars['String'],
  leccionesDisponibles?: Maybe<LeccionCreateManyWithoutProfesoresDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionCreateManyWithoutGestorInput>,
  matriculas?: Maybe<MatriculaCreateManyWithoutAlumnoInput>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<NewsCreateManyWithoutAuthorInput>,
  officialDocuments?: Maybe<OfficialDocumentCreateManyWithoutOwnerInput>,
  password: Scalars['String'],
  roles?: Maybe<RoleCreateManyWithoutUsersInput>,
  sesiones?: Maybe<SesionCreateManyWithoutByInput>,
};

export type UserEdge = {
   __typename?: 'UserEdge',
  cursor: Scalars['String'],
  node: User,
};

export enum UserGroup {
  Public = 'PUBLIC',
  Staff = 'STAFF',
  Student = 'STUDENT'
}

export enum UserOrderByInput {
  AvatarAsc = 'avatar_ASC',
  AvatarDesc = 'avatar_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  EmailVerifiedAsc = 'emailVerified_ASC',
  EmailVerifiedDesc = 'emailVerified_DESC',
  FirstnameAsc = 'firstname_ASC',
  FirstnameDesc = 'firstname_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  GroupRequestAsc = 'groupRequest_ASC',
  GroupRequestDesc = 'groupRequest_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsAdminAsc = 'isAdmin_ASC',
  IsAdminDesc = 'isAdmin_DESC',
  LastnameAsc = 'lastname_ASC',
  LastnameDesc = 'lastname_DESC',
  MetadataAsc = 'metadata_ASC',
  MetadataDesc = 'metadata_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserRoles = {
   __typename?: 'UserRoles',
  role: Role,
  user: User,
};

export type UserRolesConnection = {
   __typename?: 'UserRolesConnection',
  aggregate: AggregateUserRoles,
  edges: Array<UserRolesEdge>,
  pageInfo: PageInfo,
};

export type UserRolesCreateInput = {
  role: RoleCreateOneInput,
  user: UserCreateOneInput,
};

export type UserRolesEdge = {
   __typename?: 'UserRolesEdge',
  cursor: Scalars['String'],
  node: UserRoles,
};

export enum UserRolesOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserRolesWhereInput = {
  AND?: Maybe<Array<UserRolesWhereInput>>,
  NOT?: Maybe<Array<UserRolesWhereInput>>,
  OR?: Maybe<Array<UserRolesWhereInput>>,
  role?: Maybe<RoleWhereInput>,
  user?: Maybe<UserWhereInput>,
};

export type UserScalarWhereInput = {
  AND?: Maybe<Array<UserScalarWhereInput>>,
  avatar?: Maybe<Scalars['String']>,
  avatar_contains?: Maybe<Scalars['String']>,
  avatar_ends_with?: Maybe<Scalars['String']>,
  avatar_gt?: Maybe<Scalars['String']>,
  avatar_gte?: Maybe<Scalars['String']>,
  avatar_in?: Maybe<Array<Scalars['String']>>,
  avatar_lt?: Maybe<Scalars['String']>,
  avatar_lte?: Maybe<Scalars['String']>,
  avatar_not?: Maybe<Scalars['String']>,
  avatar_not_contains?: Maybe<Scalars['String']>,
  avatar_not_ends_with?: Maybe<Scalars['String']>,
  avatar_not_in?: Maybe<Array<Scalars['String']>>,
  avatar_not_starts_with?: Maybe<Scalars['String']>,
  avatar_starts_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  email?: Maybe<Scalars['String']>,
  email_contains?: Maybe<Scalars['String']>,
  email_ends_with?: Maybe<Scalars['String']>,
  email_gt?: Maybe<Scalars['String']>,
  email_gte?: Maybe<Scalars['String']>,
  email_in?: Maybe<Array<Scalars['String']>>,
  email_lt?: Maybe<Scalars['String']>,
  email_lte?: Maybe<Scalars['String']>,
  email_not?: Maybe<Scalars['String']>,
  email_not_contains?: Maybe<Scalars['String']>,
  email_not_ends_with?: Maybe<Scalars['String']>,
  email_not_in?: Maybe<Array<Scalars['String']>>,
  email_not_starts_with?: Maybe<Scalars['String']>,
  email_starts_with?: Maybe<Scalars['String']>,
  emailVerified?: Maybe<Scalars['Boolean']>,
  emailVerified_not?: Maybe<Scalars['Boolean']>,
  firstname?: Maybe<Scalars['String']>,
  firstname_contains?: Maybe<Scalars['String']>,
  firstname_ends_with?: Maybe<Scalars['String']>,
  firstname_gt?: Maybe<Scalars['String']>,
  firstname_gte?: Maybe<Scalars['String']>,
  firstname_in?: Maybe<Array<Scalars['String']>>,
  firstname_lt?: Maybe<Scalars['String']>,
  firstname_lte?: Maybe<Scalars['String']>,
  firstname_not?: Maybe<Scalars['String']>,
  firstname_not_contains?: Maybe<Scalars['String']>,
  firstname_not_ends_with?: Maybe<Scalars['String']>,
  firstname_not_in?: Maybe<Array<Scalars['String']>>,
  firstname_not_starts_with?: Maybe<Scalars['String']>,
  firstname_starts_with?: Maybe<Scalars['String']>,
  group?: Maybe<UserGroup>,
  group_in?: Maybe<Array<UserGroup>>,
  group_not?: Maybe<UserGroup>,
  group_not_in?: Maybe<Array<UserGroup>>,
  groupRequest?: Maybe<UserGroup>,
  groupRequest_in?: Maybe<Array<UserGroup>>,
  groupRequest_not?: Maybe<UserGroup>,
  groupRequest_not_in?: Maybe<Array<UserGroup>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  isAdmin_not?: Maybe<Scalars['Boolean']>,
  lastname?: Maybe<Scalars['String']>,
  lastname_contains?: Maybe<Scalars['String']>,
  lastname_ends_with?: Maybe<Scalars['String']>,
  lastname_gt?: Maybe<Scalars['String']>,
  lastname_gte?: Maybe<Scalars['String']>,
  lastname_in?: Maybe<Array<Scalars['String']>>,
  lastname_lt?: Maybe<Scalars['String']>,
  lastname_lte?: Maybe<Scalars['String']>,
  lastname_not?: Maybe<Scalars['String']>,
  lastname_not_contains?: Maybe<Scalars['String']>,
  lastname_not_ends_with?: Maybe<Scalars['String']>,
  lastname_not_in?: Maybe<Array<Scalars['String']>>,
  lastname_not_starts_with?: Maybe<Scalars['String']>,
  lastname_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<UserScalarWhereInput>>,
  OR?: Maybe<Array<UserScalarWhereInput>>,
  password?: Maybe<Scalars['String']>,
  password_contains?: Maybe<Scalars['String']>,
  password_ends_with?: Maybe<Scalars['String']>,
  password_gt?: Maybe<Scalars['String']>,
  password_gte?: Maybe<Scalars['String']>,
  password_in?: Maybe<Array<Scalars['String']>>,
  password_lt?: Maybe<Scalars['String']>,
  password_lte?: Maybe<Scalars['String']>,
  password_not?: Maybe<Scalars['String']>,
  password_not_contains?: Maybe<Scalars['String']>,
  password_not_ends_with?: Maybe<Scalars['String']>,
  password_not_in?: Maybe<Array<Scalars['String']>>,
  password_not_starts_with?: Maybe<Scalars['String']>,
  password_starts_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type UserUpdateDataInput = {
  addresses?: Maybe<AddressUpdateManyWithoutOwnerInput>,
  asistencias?: Maybe<AsistenciaUpdateManyWithoutEstudianteInput>,
  avatar?: Maybe<Scalars['String']>,
  department?: Maybe<DepartmentUpdateOneWithoutMembersInput>,
  devices?: Maybe<DeviceUpdateManyWithoutOwnerInput>,
  discountRequests?: Maybe<DiscountRequestUpdateManyWithoutUserInput>,
  email?: Maybe<Scalars['String']>,
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventUpdateManyWithoutAuthorInput>,
  firstname?: Maybe<Scalars['String']>,
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname?: Maybe<Scalars['String']>,
  leccionesDisponibles?: Maybe<LeccionUpdateManyWithoutProfesoresDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionUpdateManyWithoutGestorInput>,
  matriculas?: Maybe<MatriculaUpdateManyWithoutAlumnoInput>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<NewsUpdateManyWithoutAuthorInput>,
  officialDocuments?: Maybe<OfficialDocumentUpdateManyWithoutOwnerInput>,
  password?: Maybe<Scalars['String']>,
  roles?: Maybe<RoleUpdateManyWithoutUsersInput>,
  sesiones?: Maybe<SesionUpdateManyWithoutByInput>,
  socialNetworkLinks?: Maybe<SocialLinkUpdateManyWithoutOwnerInput>,
};

export type UserUpdateInput = {
  addresses?: Maybe<AddressUpdateManyWithoutOwnerInput>,
  asistencias?: Maybe<AsistenciaUpdateManyWithoutEstudianteInput>,
  avatar?: Maybe<Scalars['String']>,
  department?: Maybe<DepartmentUpdateOneWithoutMembersInput>,
  devices?: Maybe<DeviceUpdateManyWithoutOwnerInput>,
  discountRequests?: Maybe<DiscountRequestUpdateManyWithoutUserInput>,
  email?: Maybe<Scalars['String']>,
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventUpdateManyWithoutAuthorInput>,
  firstname?: Maybe<Scalars['String']>,
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname?: Maybe<Scalars['String']>,
  leccionesDisponibles?: Maybe<LeccionUpdateManyWithoutProfesoresDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionUpdateManyWithoutGestorInput>,
  matriculas?: Maybe<MatriculaUpdateManyWithoutAlumnoInput>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<NewsUpdateManyWithoutAuthorInput>,
  officialDocuments?: Maybe<OfficialDocumentUpdateManyWithoutOwnerInput>,
  password?: Maybe<Scalars['String']>,
  roles?: Maybe<RoleUpdateManyWithoutUsersInput>,
  sesiones?: Maybe<SesionUpdateManyWithoutByInput>,
  socialNetworkLinks?: Maybe<SocialLinkUpdateManyWithoutOwnerInput>,
};

export type UserUpdateManyDataInput = {
  avatar?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  emailVerified?: Maybe<Scalars['Boolean']>,
  firstname?: Maybe<Scalars['String']>,
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname?: Maybe<Scalars['String']>,
  metadata?: Maybe<Scalars['Json']>,
  password?: Maybe<Scalars['String']>,
};

export type UserUpdateManyMutationInput = {
  avatar?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  emailVerified?: Maybe<Scalars['Boolean']>,
  firstname?: Maybe<Scalars['String']>,
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname?: Maybe<Scalars['String']>,
  metadata?: Maybe<Scalars['Json']>,
  password?: Maybe<Scalars['String']>,
};

export type UserUpdateManyWithoutDepartmentInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>,
  create?: Maybe<Array<UserCreateWithoutDepartmentInput>>,
  delete?: Maybe<Array<UserWhereUniqueInput>>,
  deleteMany?: Maybe<Array<UserScalarWhereInput>>,
  disconnect?: Maybe<Array<UserWhereUniqueInput>>,
  set?: Maybe<Array<UserWhereUniqueInput>>,
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutDepartmentInput>>,
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutDepartmentInput>>,
};

export type UserUpdateManyWithoutLeccionesDisponiblesInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>,
  create?: Maybe<Array<UserCreateWithoutLeccionesDisponiblesInput>>,
  delete?: Maybe<Array<UserWhereUniqueInput>>,
  deleteMany?: Maybe<Array<UserScalarWhereInput>>,
  disconnect?: Maybe<Array<UserWhereUniqueInput>>,
  set?: Maybe<Array<UserWhereUniqueInput>>,
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutLeccionesDisponiblesInput>>,
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutLeccionesDisponiblesInput>>,
};

export type UserUpdateManyWithoutRolesInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>,
  create?: Maybe<Array<UserCreateWithoutRolesInput>>,
  delete?: Maybe<Array<UserWhereUniqueInput>>,
  deleteMany?: Maybe<Array<UserScalarWhereInput>>,
  disconnect?: Maybe<Array<UserWhereUniqueInput>>,
  set?: Maybe<Array<UserWhereUniqueInput>>,
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutRolesInput>>,
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>,
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutRolesInput>>,
};

export type UserUpdateManyWithWhereNestedInput = {
  data: UserUpdateManyDataInput,
  where: UserScalarWhereInput,
};

export type UserUpdateOneRequiredInput = {
  connect?: Maybe<UserWhereUniqueInput>,
  create?: Maybe<UserCreateInput>,
  update?: Maybe<UserUpdateDataInput>,
  upsert?: Maybe<UserUpsertNestedInput>,
};

export type UserUpdateOneRequiredWithoutAsistenciasInput = {
  connect?: Maybe<UserWhereUniqueInput>,
  create?: Maybe<UserCreateWithoutAsistenciasInput>,
  update?: Maybe<UserUpdateWithoutAsistenciasDataInput>,
  upsert?: Maybe<UserUpsertWithoutAsistenciasInput>,
};

export type UserUpdateOneRequiredWithoutDevicesInput = {
  connect?: Maybe<UserWhereUniqueInput>,
  create?: Maybe<UserCreateWithoutDevicesInput>,
  update?: Maybe<UserUpdateWithoutDevicesDataInput>,
  upsert?: Maybe<UserUpsertWithoutDevicesInput>,
};

export type UserUpdateOneRequiredWithoutDiscountRequestsInput = {
  connect?: Maybe<UserWhereUniqueInput>,
  create?: Maybe<UserCreateWithoutDiscountRequestsInput>,
  update?: Maybe<UserUpdateWithoutDiscountRequestsDataInput>,
  upsert?: Maybe<UserUpsertWithoutDiscountRequestsInput>,
};

export type UserUpdateOneRequiredWithoutEventsInput = {
  connect?: Maybe<UserWhereUniqueInput>,
  create?: Maybe<UserCreateWithoutEventsInput>,
  update?: Maybe<UserUpdateWithoutEventsDataInput>,
  upsert?: Maybe<UserUpsertWithoutEventsInput>,
};

export type UserUpdateOneRequiredWithoutLeccionesGestionadasInput = {
  connect?: Maybe<UserWhereUniqueInput>,
  create?: Maybe<UserCreateWithoutLeccionesGestionadasInput>,
  update?: Maybe<UserUpdateWithoutLeccionesGestionadasDataInput>,
  upsert?: Maybe<UserUpsertWithoutLeccionesGestionadasInput>,
};

export type UserUpdateOneRequiredWithoutMatriculasInput = {
  connect?: Maybe<UserWhereUniqueInput>,
  create?: Maybe<UserCreateWithoutMatriculasInput>,
  update?: Maybe<UserUpdateWithoutMatriculasDataInput>,
  upsert?: Maybe<UserUpsertWithoutMatriculasInput>,
};

export type UserUpdateOneRequiredWithoutNewsesInput = {
  connect?: Maybe<UserWhereUniqueInput>,
  create?: Maybe<UserCreateWithoutNewsesInput>,
  update?: Maybe<UserUpdateWithoutNewsesDataInput>,
  upsert?: Maybe<UserUpsertWithoutNewsesInput>,
};

export type UserUpdateOneRequiredWithoutOfficialDocumentsInput = {
  connect?: Maybe<UserWhereUniqueInput>,
  create?: Maybe<UserCreateWithoutOfficialDocumentsInput>,
  update?: Maybe<UserUpdateWithoutOfficialDocumentsDataInput>,
  upsert?: Maybe<UserUpsertWithoutOfficialDocumentsInput>,
};

export type UserUpdateOneRequiredWithoutSesionesInput = {
  connect?: Maybe<UserWhereUniqueInput>,
  create?: Maybe<UserCreateWithoutSesionesInput>,
  update?: Maybe<UserUpdateWithoutSesionesDataInput>,
  upsert?: Maybe<UserUpsertWithoutSesionesInput>,
};

export type UserUpdateOneRequiredWithoutSocialNetworkLinksInput = {
  connect?: Maybe<UserWhereUniqueInput>,
  create?: Maybe<UserCreateWithoutSocialNetworkLinksInput>,
  update?: Maybe<UserUpdateWithoutSocialNetworkLinksDataInput>,
  upsert?: Maybe<UserUpsertWithoutSocialNetworkLinksInput>,
};

export type UserUpdateOneWithoutAddressesInput = {
  connect?: Maybe<UserWhereUniqueInput>,
  create?: Maybe<UserCreateWithoutAddressesInput>,
  delete?: Maybe<Scalars['Boolean']>,
  disconnect?: Maybe<Scalars['Boolean']>,
  update?: Maybe<UserUpdateWithoutAddressesDataInput>,
  upsert?: Maybe<UserUpsertWithoutAddressesInput>,
};

export type UserUpdateWithoutAddressesDataInput = {
  asistencias?: Maybe<AsistenciaUpdateManyWithoutEstudianteInput>,
  avatar?: Maybe<Scalars['String']>,
  department?: Maybe<DepartmentUpdateOneWithoutMembersInput>,
  devices?: Maybe<DeviceUpdateManyWithoutOwnerInput>,
  discountRequests?: Maybe<DiscountRequestUpdateManyWithoutUserInput>,
  email?: Maybe<Scalars['String']>,
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventUpdateManyWithoutAuthorInput>,
  firstname?: Maybe<Scalars['String']>,
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname?: Maybe<Scalars['String']>,
  leccionesDisponibles?: Maybe<LeccionUpdateManyWithoutProfesoresDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionUpdateManyWithoutGestorInput>,
  matriculas?: Maybe<MatriculaUpdateManyWithoutAlumnoInput>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<NewsUpdateManyWithoutAuthorInput>,
  officialDocuments?: Maybe<OfficialDocumentUpdateManyWithoutOwnerInput>,
  password?: Maybe<Scalars['String']>,
  roles?: Maybe<RoleUpdateManyWithoutUsersInput>,
  sesiones?: Maybe<SesionUpdateManyWithoutByInput>,
  socialNetworkLinks?: Maybe<SocialLinkUpdateManyWithoutOwnerInput>,
};

export type UserUpdateWithoutAsistenciasDataInput = {
  addresses?: Maybe<AddressUpdateManyWithoutOwnerInput>,
  avatar?: Maybe<Scalars['String']>,
  department?: Maybe<DepartmentUpdateOneWithoutMembersInput>,
  devices?: Maybe<DeviceUpdateManyWithoutOwnerInput>,
  discountRequests?: Maybe<DiscountRequestUpdateManyWithoutUserInput>,
  email?: Maybe<Scalars['String']>,
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventUpdateManyWithoutAuthorInput>,
  firstname?: Maybe<Scalars['String']>,
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname?: Maybe<Scalars['String']>,
  leccionesDisponibles?: Maybe<LeccionUpdateManyWithoutProfesoresDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionUpdateManyWithoutGestorInput>,
  matriculas?: Maybe<MatriculaUpdateManyWithoutAlumnoInput>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<NewsUpdateManyWithoutAuthorInput>,
  officialDocuments?: Maybe<OfficialDocumentUpdateManyWithoutOwnerInput>,
  password?: Maybe<Scalars['String']>,
  roles?: Maybe<RoleUpdateManyWithoutUsersInput>,
  sesiones?: Maybe<SesionUpdateManyWithoutByInput>,
  socialNetworkLinks?: Maybe<SocialLinkUpdateManyWithoutOwnerInput>,
};

export type UserUpdateWithoutDepartmentDataInput = {
  addresses?: Maybe<AddressUpdateManyWithoutOwnerInput>,
  asistencias?: Maybe<AsistenciaUpdateManyWithoutEstudianteInput>,
  avatar?: Maybe<Scalars['String']>,
  devices?: Maybe<DeviceUpdateManyWithoutOwnerInput>,
  discountRequests?: Maybe<DiscountRequestUpdateManyWithoutUserInput>,
  email?: Maybe<Scalars['String']>,
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventUpdateManyWithoutAuthorInput>,
  firstname?: Maybe<Scalars['String']>,
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname?: Maybe<Scalars['String']>,
  leccionesDisponibles?: Maybe<LeccionUpdateManyWithoutProfesoresDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionUpdateManyWithoutGestorInput>,
  matriculas?: Maybe<MatriculaUpdateManyWithoutAlumnoInput>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<NewsUpdateManyWithoutAuthorInput>,
  officialDocuments?: Maybe<OfficialDocumentUpdateManyWithoutOwnerInput>,
  password?: Maybe<Scalars['String']>,
  roles?: Maybe<RoleUpdateManyWithoutUsersInput>,
  sesiones?: Maybe<SesionUpdateManyWithoutByInput>,
  socialNetworkLinks?: Maybe<SocialLinkUpdateManyWithoutOwnerInput>,
};

export type UserUpdateWithoutDevicesDataInput = {
  addresses?: Maybe<AddressUpdateManyWithoutOwnerInput>,
  asistencias?: Maybe<AsistenciaUpdateManyWithoutEstudianteInput>,
  avatar?: Maybe<Scalars['String']>,
  department?: Maybe<DepartmentUpdateOneWithoutMembersInput>,
  discountRequests?: Maybe<DiscountRequestUpdateManyWithoutUserInput>,
  email?: Maybe<Scalars['String']>,
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventUpdateManyWithoutAuthorInput>,
  firstname?: Maybe<Scalars['String']>,
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname?: Maybe<Scalars['String']>,
  leccionesDisponibles?: Maybe<LeccionUpdateManyWithoutProfesoresDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionUpdateManyWithoutGestorInput>,
  matriculas?: Maybe<MatriculaUpdateManyWithoutAlumnoInput>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<NewsUpdateManyWithoutAuthorInput>,
  officialDocuments?: Maybe<OfficialDocumentUpdateManyWithoutOwnerInput>,
  password?: Maybe<Scalars['String']>,
  roles?: Maybe<RoleUpdateManyWithoutUsersInput>,
  sesiones?: Maybe<SesionUpdateManyWithoutByInput>,
  socialNetworkLinks?: Maybe<SocialLinkUpdateManyWithoutOwnerInput>,
};

export type UserUpdateWithoutDiscountRequestsDataInput = {
  addresses?: Maybe<AddressUpdateManyWithoutOwnerInput>,
  asistencias?: Maybe<AsistenciaUpdateManyWithoutEstudianteInput>,
  avatar?: Maybe<Scalars['String']>,
  department?: Maybe<DepartmentUpdateOneWithoutMembersInput>,
  devices?: Maybe<DeviceUpdateManyWithoutOwnerInput>,
  email?: Maybe<Scalars['String']>,
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventUpdateManyWithoutAuthorInput>,
  firstname?: Maybe<Scalars['String']>,
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname?: Maybe<Scalars['String']>,
  leccionesDisponibles?: Maybe<LeccionUpdateManyWithoutProfesoresDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionUpdateManyWithoutGestorInput>,
  matriculas?: Maybe<MatriculaUpdateManyWithoutAlumnoInput>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<NewsUpdateManyWithoutAuthorInput>,
  officialDocuments?: Maybe<OfficialDocumentUpdateManyWithoutOwnerInput>,
  password?: Maybe<Scalars['String']>,
  roles?: Maybe<RoleUpdateManyWithoutUsersInput>,
  sesiones?: Maybe<SesionUpdateManyWithoutByInput>,
  socialNetworkLinks?: Maybe<SocialLinkUpdateManyWithoutOwnerInput>,
};

export type UserUpdateWithoutEventsDataInput = {
  addresses?: Maybe<AddressUpdateManyWithoutOwnerInput>,
  asistencias?: Maybe<AsistenciaUpdateManyWithoutEstudianteInput>,
  avatar?: Maybe<Scalars['String']>,
  department?: Maybe<DepartmentUpdateOneWithoutMembersInput>,
  devices?: Maybe<DeviceUpdateManyWithoutOwnerInput>,
  discountRequests?: Maybe<DiscountRequestUpdateManyWithoutUserInput>,
  email?: Maybe<Scalars['String']>,
  emailVerified?: Maybe<Scalars['Boolean']>,
  firstname?: Maybe<Scalars['String']>,
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname?: Maybe<Scalars['String']>,
  leccionesDisponibles?: Maybe<LeccionUpdateManyWithoutProfesoresDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionUpdateManyWithoutGestorInput>,
  matriculas?: Maybe<MatriculaUpdateManyWithoutAlumnoInput>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<NewsUpdateManyWithoutAuthorInput>,
  officialDocuments?: Maybe<OfficialDocumentUpdateManyWithoutOwnerInput>,
  password?: Maybe<Scalars['String']>,
  roles?: Maybe<RoleUpdateManyWithoutUsersInput>,
  sesiones?: Maybe<SesionUpdateManyWithoutByInput>,
  socialNetworkLinks?: Maybe<SocialLinkUpdateManyWithoutOwnerInput>,
};

export type UserUpdateWithoutLeccionesDisponiblesDataInput = {
  addresses?: Maybe<AddressUpdateManyWithoutOwnerInput>,
  asistencias?: Maybe<AsistenciaUpdateManyWithoutEstudianteInput>,
  avatar?: Maybe<Scalars['String']>,
  department?: Maybe<DepartmentUpdateOneWithoutMembersInput>,
  devices?: Maybe<DeviceUpdateManyWithoutOwnerInput>,
  discountRequests?: Maybe<DiscountRequestUpdateManyWithoutUserInput>,
  email?: Maybe<Scalars['String']>,
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventUpdateManyWithoutAuthorInput>,
  firstname?: Maybe<Scalars['String']>,
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname?: Maybe<Scalars['String']>,
  leccionesGestionadas?: Maybe<LeccionUpdateManyWithoutGestorInput>,
  matriculas?: Maybe<MatriculaUpdateManyWithoutAlumnoInput>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<NewsUpdateManyWithoutAuthorInput>,
  officialDocuments?: Maybe<OfficialDocumentUpdateManyWithoutOwnerInput>,
  password?: Maybe<Scalars['String']>,
  roles?: Maybe<RoleUpdateManyWithoutUsersInput>,
  sesiones?: Maybe<SesionUpdateManyWithoutByInput>,
  socialNetworkLinks?: Maybe<SocialLinkUpdateManyWithoutOwnerInput>,
};

export type UserUpdateWithoutLeccionesGestionadasDataInput = {
  addresses?: Maybe<AddressUpdateManyWithoutOwnerInput>,
  asistencias?: Maybe<AsistenciaUpdateManyWithoutEstudianteInput>,
  avatar?: Maybe<Scalars['String']>,
  department?: Maybe<DepartmentUpdateOneWithoutMembersInput>,
  devices?: Maybe<DeviceUpdateManyWithoutOwnerInput>,
  discountRequests?: Maybe<DiscountRequestUpdateManyWithoutUserInput>,
  email?: Maybe<Scalars['String']>,
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventUpdateManyWithoutAuthorInput>,
  firstname?: Maybe<Scalars['String']>,
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname?: Maybe<Scalars['String']>,
  leccionesDisponibles?: Maybe<LeccionUpdateManyWithoutProfesoresDisponiblesInput>,
  matriculas?: Maybe<MatriculaUpdateManyWithoutAlumnoInput>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<NewsUpdateManyWithoutAuthorInput>,
  officialDocuments?: Maybe<OfficialDocumentUpdateManyWithoutOwnerInput>,
  password?: Maybe<Scalars['String']>,
  roles?: Maybe<RoleUpdateManyWithoutUsersInput>,
  sesiones?: Maybe<SesionUpdateManyWithoutByInput>,
  socialNetworkLinks?: Maybe<SocialLinkUpdateManyWithoutOwnerInput>,
};

export type UserUpdateWithoutMatriculasDataInput = {
  addresses?: Maybe<AddressUpdateManyWithoutOwnerInput>,
  asistencias?: Maybe<AsistenciaUpdateManyWithoutEstudianteInput>,
  avatar?: Maybe<Scalars['String']>,
  department?: Maybe<DepartmentUpdateOneWithoutMembersInput>,
  devices?: Maybe<DeviceUpdateManyWithoutOwnerInput>,
  discountRequests?: Maybe<DiscountRequestUpdateManyWithoutUserInput>,
  email?: Maybe<Scalars['String']>,
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventUpdateManyWithoutAuthorInput>,
  firstname?: Maybe<Scalars['String']>,
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname?: Maybe<Scalars['String']>,
  leccionesDisponibles?: Maybe<LeccionUpdateManyWithoutProfesoresDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionUpdateManyWithoutGestorInput>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<NewsUpdateManyWithoutAuthorInput>,
  officialDocuments?: Maybe<OfficialDocumentUpdateManyWithoutOwnerInput>,
  password?: Maybe<Scalars['String']>,
  roles?: Maybe<RoleUpdateManyWithoutUsersInput>,
  sesiones?: Maybe<SesionUpdateManyWithoutByInput>,
  socialNetworkLinks?: Maybe<SocialLinkUpdateManyWithoutOwnerInput>,
};

export type UserUpdateWithoutNewsesDataInput = {
  addresses?: Maybe<AddressUpdateManyWithoutOwnerInput>,
  asistencias?: Maybe<AsistenciaUpdateManyWithoutEstudianteInput>,
  avatar?: Maybe<Scalars['String']>,
  department?: Maybe<DepartmentUpdateOneWithoutMembersInput>,
  devices?: Maybe<DeviceUpdateManyWithoutOwnerInput>,
  discountRequests?: Maybe<DiscountRequestUpdateManyWithoutUserInput>,
  email?: Maybe<Scalars['String']>,
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventUpdateManyWithoutAuthorInput>,
  firstname?: Maybe<Scalars['String']>,
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname?: Maybe<Scalars['String']>,
  leccionesDisponibles?: Maybe<LeccionUpdateManyWithoutProfesoresDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionUpdateManyWithoutGestorInput>,
  matriculas?: Maybe<MatriculaUpdateManyWithoutAlumnoInput>,
  metadata?: Maybe<Scalars['Json']>,
  officialDocuments?: Maybe<OfficialDocumentUpdateManyWithoutOwnerInput>,
  password?: Maybe<Scalars['String']>,
  roles?: Maybe<RoleUpdateManyWithoutUsersInput>,
  sesiones?: Maybe<SesionUpdateManyWithoutByInput>,
  socialNetworkLinks?: Maybe<SocialLinkUpdateManyWithoutOwnerInput>,
};

export type UserUpdateWithoutOfficialDocumentsDataInput = {
  addresses?: Maybe<AddressUpdateManyWithoutOwnerInput>,
  asistencias?: Maybe<AsistenciaUpdateManyWithoutEstudianteInput>,
  avatar?: Maybe<Scalars['String']>,
  department?: Maybe<DepartmentUpdateOneWithoutMembersInput>,
  devices?: Maybe<DeviceUpdateManyWithoutOwnerInput>,
  discountRequests?: Maybe<DiscountRequestUpdateManyWithoutUserInput>,
  email?: Maybe<Scalars['String']>,
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventUpdateManyWithoutAuthorInput>,
  firstname?: Maybe<Scalars['String']>,
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname?: Maybe<Scalars['String']>,
  leccionesDisponibles?: Maybe<LeccionUpdateManyWithoutProfesoresDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionUpdateManyWithoutGestorInput>,
  matriculas?: Maybe<MatriculaUpdateManyWithoutAlumnoInput>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<NewsUpdateManyWithoutAuthorInput>,
  password?: Maybe<Scalars['String']>,
  roles?: Maybe<RoleUpdateManyWithoutUsersInput>,
  sesiones?: Maybe<SesionUpdateManyWithoutByInput>,
  socialNetworkLinks?: Maybe<SocialLinkUpdateManyWithoutOwnerInput>,
};

export type UserUpdateWithoutRolesDataInput = {
  addresses?: Maybe<AddressUpdateManyWithoutOwnerInput>,
  asistencias?: Maybe<AsistenciaUpdateManyWithoutEstudianteInput>,
  avatar?: Maybe<Scalars['String']>,
  department?: Maybe<DepartmentUpdateOneWithoutMembersInput>,
  devices?: Maybe<DeviceUpdateManyWithoutOwnerInput>,
  discountRequests?: Maybe<DiscountRequestUpdateManyWithoutUserInput>,
  email?: Maybe<Scalars['String']>,
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventUpdateManyWithoutAuthorInput>,
  firstname?: Maybe<Scalars['String']>,
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname?: Maybe<Scalars['String']>,
  leccionesDisponibles?: Maybe<LeccionUpdateManyWithoutProfesoresDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionUpdateManyWithoutGestorInput>,
  matriculas?: Maybe<MatriculaUpdateManyWithoutAlumnoInput>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<NewsUpdateManyWithoutAuthorInput>,
  officialDocuments?: Maybe<OfficialDocumentUpdateManyWithoutOwnerInput>,
  password?: Maybe<Scalars['String']>,
  sesiones?: Maybe<SesionUpdateManyWithoutByInput>,
  socialNetworkLinks?: Maybe<SocialLinkUpdateManyWithoutOwnerInput>,
};

export type UserUpdateWithoutSesionesDataInput = {
  addresses?: Maybe<AddressUpdateManyWithoutOwnerInput>,
  asistencias?: Maybe<AsistenciaUpdateManyWithoutEstudianteInput>,
  avatar?: Maybe<Scalars['String']>,
  department?: Maybe<DepartmentUpdateOneWithoutMembersInput>,
  devices?: Maybe<DeviceUpdateManyWithoutOwnerInput>,
  discountRequests?: Maybe<DiscountRequestUpdateManyWithoutUserInput>,
  email?: Maybe<Scalars['String']>,
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventUpdateManyWithoutAuthorInput>,
  firstname?: Maybe<Scalars['String']>,
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname?: Maybe<Scalars['String']>,
  leccionesDisponibles?: Maybe<LeccionUpdateManyWithoutProfesoresDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionUpdateManyWithoutGestorInput>,
  matriculas?: Maybe<MatriculaUpdateManyWithoutAlumnoInput>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<NewsUpdateManyWithoutAuthorInput>,
  officialDocuments?: Maybe<OfficialDocumentUpdateManyWithoutOwnerInput>,
  password?: Maybe<Scalars['String']>,
  roles?: Maybe<RoleUpdateManyWithoutUsersInput>,
  socialNetworkLinks?: Maybe<SocialLinkUpdateManyWithoutOwnerInput>,
};

export type UserUpdateWithoutSocialNetworkLinksDataInput = {
  addresses?: Maybe<AddressUpdateManyWithoutOwnerInput>,
  asistencias?: Maybe<AsistenciaUpdateManyWithoutEstudianteInput>,
  avatar?: Maybe<Scalars['String']>,
  department?: Maybe<DepartmentUpdateOneWithoutMembersInput>,
  devices?: Maybe<DeviceUpdateManyWithoutOwnerInput>,
  discountRequests?: Maybe<DiscountRequestUpdateManyWithoutUserInput>,
  email?: Maybe<Scalars['String']>,
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventUpdateManyWithoutAuthorInput>,
  firstname?: Maybe<Scalars['String']>,
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname?: Maybe<Scalars['String']>,
  leccionesDisponibles?: Maybe<LeccionUpdateManyWithoutProfesoresDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionUpdateManyWithoutGestorInput>,
  matriculas?: Maybe<MatriculaUpdateManyWithoutAlumnoInput>,
  metadata?: Maybe<Scalars['Json']>,
  newses?: Maybe<NewsUpdateManyWithoutAuthorInput>,
  officialDocuments?: Maybe<OfficialDocumentUpdateManyWithoutOwnerInput>,
  password?: Maybe<Scalars['String']>,
  roles?: Maybe<RoleUpdateManyWithoutUsersInput>,
  sesiones?: Maybe<SesionUpdateManyWithoutByInput>,
};

export type UserUpdateWithWhereUniqueWithoutDepartmentInput = {
  data: UserUpdateWithoutDepartmentDataInput,
  where: UserWhereUniqueInput,
};

export type UserUpdateWithWhereUniqueWithoutLeccionesDisponiblesInput = {
  data: UserUpdateWithoutLeccionesDisponiblesDataInput,
  where: UserWhereUniqueInput,
};

export type UserUpdateWithWhereUniqueWithoutRolesInput = {
  data: UserUpdateWithoutRolesDataInput,
  where: UserWhereUniqueInput,
};

export type UserUpsertNestedInput = {
  create: UserCreateInput,
  update: UserUpdateDataInput,
};

export type UserUpsertWithoutAddressesInput = {
  create: UserCreateWithoutAddressesInput,
  update: UserUpdateWithoutAddressesDataInput,
};

export type UserUpsertWithoutAsistenciasInput = {
  create: UserCreateWithoutAsistenciasInput,
  update: UserUpdateWithoutAsistenciasDataInput,
};

export type UserUpsertWithoutDevicesInput = {
  create: UserCreateWithoutDevicesInput,
  update: UserUpdateWithoutDevicesDataInput,
};

export type UserUpsertWithoutDiscountRequestsInput = {
  create: UserCreateWithoutDiscountRequestsInput,
  update: UserUpdateWithoutDiscountRequestsDataInput,
};

export type UserUpsertWithoutEventsInput = {
  create: UserCreateWithoutEventsInput,
  update: UserUpdateWithoutEventsDataInput,
};

export type UserUpsertWithoutLeccionesGestionadasInput = {
  create: UserCreateWithoutLeccionesGestionadasInput,
  update: UserUpdateWithoutLeccionesGestionadasDataInput,
};

export type UserUpsertWithoutMatriculasInput = {
  create: UserCreateWithoutMatriculasInput,
  update: UserUpdateWithoutMatriculasDataInput,
};

export type UserUpsertWithoutNewsesInput = {
  create: UserCreateWithoutNewsesInput,
  update: UserUpdateWithoutNewsesDataInput,
};

export type UserUpsertWithoutOfficialDocumentsInput = {
  create: UserCreateWithoutOfficialDocumentsInput,
  update: UserUpdateWithoutOfficialDocumentsDataInput,
};

export type UserUpsertWithoutSesionesInput = {
  create: UserCreateWithoutSesionesInput,
  update: UserUpdateWithoutSesionesDataInput,
};

export type UserUpsertWithoutSocialNetworkLinksInput = {
  create: UserCreateWithoutSocialNetworkLinksInput,
  update: UserUpdateWithoutSocialNetworkLinksDataInput,
};

export type UserUpsertWithWhereUniqueWithoutDepartmentInput = {
  create: UserCreateWithoutDepartmentInput,
  update: UserUpdateWithoutDepartmentDataInput,
  where: UserWhereUniqueInput,
};

export type UserUpsertWithWhereUniqueWithoutLeccionesDisponiblesInput = {
  create: UserCreateWithoutLeccionesDisponiblesInput,
  update: UserUpdateWithoutLeccionesDisponiblesDataInput,
  where: UserWhereUniqueInput,
};

export type UserUpsertWithWhereUniqueWithoutRolesInput = {
  create: UserCreateWithoutRolesInput,
  update: UserUpdateWithoutRolesDataInput,
  where: UserWhereUniqueInput,
};

export type UserWhereInput = {
  addresses_every?: Maybe<AddressWhereInput>,
  addresses_none?: Maybe<AddressWhereInput>,
  addresses_some?: Maybe<AddressWhereInput>,
  AND?: Maybe<Array<UserWhereInput>>,
  asistencias_every?: Maybe<AsistenciaWhereInput>,
  asistencias_none?: Maybe<AsistenciaWhereInput>,
  asistencias_some?: Maybe<AsistenciaWhereInput>,
  avatar?: Maybe<Scalars['String']>,
  avatar_contains?: Maybe<Scalars['String']>,
  avatar_ends_with?: Maybe<Scalars['String']>,
  avatar_gt?: Maybe<Scalars['String']>,
  avatar_gte?: Maybe<Scalars['String']>,
  avatar_in?: Maybe<Array<Scalars['String']>>,
  avatar_lt?: Maybe<Scalars['String']>,
  avatar_lte?: Maybe<Scalars['String']>,
  avatar_not?: Maybe<Scalars['String']>,
  avatar_not_contains?: Maybe<Scalars['String']>,
  avatar_not_ends_with?: Maybe<Scalars['String']>,
  avatar_not_in?: Maybe<Array<Scalars['String']>>,
  avatar_not_starts_with?: Maybe<Scalars['String']>,
  avatar_starts_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  department?: Maybe<DepartmentWhereInput>,
  devices_every?: Maybe<DeviceWhereInput>,
  devices_none?: Maybe<DeviceWhereInput>,
  devices_some?: Maybe<DeviceWhereInput>,
  discountRequests_every?: Maybe<DiscountRequestWhereInput>,
  discountRequests_none?: Maybe<DiscountRequestWhereInput>,
  discountRequests_some?: Maybe<DiscountRequestWhereInput>,
  email?: Maybe<Scalars['String']>,
  email_contains?: Maybe<Scalars['String']>,
  email_ends_with?: Maybe<Scalars['String']>,
  email_gt?: Maybe<Scalars['String']>,
  email_gte?: Maybe<Scalars['String']>,
  email_in?: Maybe<Array<Scalars['String']>>,
  email_lt?: Maybe<Scalars['String']>,
  email_lte?: Maybe<Scalars['String']>,
  email_not?: Maybe<Scalars['String']>,
  email_not_contains?: Maybe<Scalars['String']>,
  email_not_ends_with?: Maybe<Scalars['String']>,
  email_not_in?: Maybe<Array<Scalars['String']>>,
  email_not_starts_with?: Maybe<Scalars['String']>,
  email_starts_with?: Maybe<Scalars['String']>,
  emailVerified?: Maybe<Scalars['Boolean']>,
  emailVerified_not?: Maybe<Scalars['Boolean']>,
  events_every?: Maybe<EventWhereInput>,
  events_none?: Maybe<EventWhereInput>,
  events_some?: Maybe<EventWhereInput>,
  firstname?: Maybe<Scalars['String']>,
  firstname_contains?: Maybe<Scalars['String']>,
  firstname_ends_with?: Maybe<Scalars['String']>,
  firstname_gt?: Maybe<Scalars['String']>,
  firstname_gte?: Maybe<Scalars['String']>,
  firstname_in?: Maybe<Array<Scalars['String']>>,
  firstname_lt?: Maybe<Scalars['String']>,
  firstname_lte?: Maybe<Scalars['String']>,
  firstname_not?: Maybe<Scalars['String']>,
  firstname_not_contains?: Maybe<Scalars['String']>,
  firstname_not_ends_with?: Maybe<Scalars['String']>,
  firstname_not_in?: Maybe<Array<Scalars['String']>>,
  firstname_not_starts_with?: Maybe<Scalars['String']>,
  firstname_starts_with?: Maybe<Scalars['String']>,
  group?: Maybe<UserGroup>,
  group_in?: Maybe<Array<UserGroup>>,
  group_not?: Maybe<UserGroup>,
  group_not_in?: Maybe<Array<UserGroup>>,
  groupRequest?: Maybe<UserGroup>,
  groupRequest_in?: Maybe<Array<UserGroup>>,
  groupRequest_not?: Maybe<UserGroup>,
  groupRequest_not_in?: Maybe<Array<UserGroup>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  isAdmin_not?: Maybe<Scalars['Boolean']>,
  lastname?: Maybe<Scalars['String']>,
  lastname_contains?: Maybe<Scalars['String']>,
  lastname_ends_with?: Maybe<Scalars['String']>,
  lastname_gt?: Maybe<Scalars['String']>,
  lastname_gte?: Maybe<Scalars['String']>,
  lastname_in?: Maybe<Array<Scalars['String']>>,
  lastname_lt?: Maybe<Scalars['String']>,
  lastname_lte?: Maybe<Scalars['String']>,
  lastname_not?: Maybe<Scalars['String']>,
  lastname_not_contains?: Maybe<Scalars['String']>,
  lastname_not_ends_with?: Maybe<Scalars['String']>,
  lastname_not_in?: Maybe<Array<Scalars['String']>>,
  lastname_not_starts_with?: Maybe<Scalars['String']>,
  lastname_starts_with?: Maybe<Scalars['String']>,
  leccionesDisponibles_every?: Maybe<LeccionWhereInput>,
  leccionesDisponibles_none?: Maybe<LeccionWhereInput>,
  leccionesDisponibles_some?: Maybe<LeccionWhereInput>,
  leccionesGestionadas_every?: Maybe<LeccionWhereInput>,
  leccionesGestionadas_none?: Maybe<LeccionWhereInput>,
  leccionesGestionadas_some?: Maybe<LeccionWhereInput>,
  matriculas_every?: Maybe<MatriculaWhereInput>,
  matriculas_none?: Maybe<MatriculaWhereInput>,
  matriculas_some?: Maybe<MatriculaWhereInput>,
  newses_every?: Maybe<NewsWhereInput>,
  newses_none?: Maybe<NewsWhereInput>,
  newses_some?: Maybe<NewsWhereInput>,
  NOT?: Maybe<Array<UserWhereInput>>,
  officialDocuments_every?: Maybe<OfficialDocumentWhereInput>,
  officialDocuments_none?: Maybe<OfficialDocumentWhereInput>,
  officialDocuments_some?: Maybe<OfficialDocumentWhereInput>,
  OR?: Maybe<Array<UserWhereInput>>,
  password?: Maybe<Scalars['String']>,
  password_contains?: Maybe<Scalars['String']>,
  password_ends_with?: Maybe<Scalars['String']>,
  password_gt?: Maybe<Scalars['String']>,
  password_gte?: Maybe<Scalars['String']>,
  password_in?: Maybe<Array<Scalars['String']>>,
  password_lt?: Maybe<Scalars['String']>,
  password_lte?: Maybe<Scalars['String']>,
  password_not?: Maybe<Scalars['String']>,
  password_not_contains?: Maybe<Scalars['String']>,
  password_not_ends_with?: Maybe<Scalars['String']>,
  password_not_in?: Maybe<Array<Scalars['String']>>,
  password_not_starts_with?: Maybe<Scalars['String']>,
  password_starts_with?: Maybe<Scalars['String']>,
  roles_every?: Maybe<RoleWhereInput>,
  roles_none?: Maybe<RoleWhereInput>,
  roles_some?: Maybe<RoleWhereInput>,
  sesiones_every?: Maybe<SesionWhereInput>,
  sesiones_none?: Maybe<SesionWhereInput>,
  sesiones_some?: Maybe<SesionWhereInput>,
  socialNetworkLinks_every?: Maybe<SocialLinkWhereInput>,
  socialNetworkLinks_none?: Maybe<SocialLinkWhereInput>,
  socialNetworkLinks_some?: Maybe<SocialLinkWhereInput>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
};

export type Venue = {
   __typename?: 'Venue',
  address: Scalars['String'],
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  name: Scalars['String'],
  placeID?: Maybe<Scalars['String']>,
  spaces?: Maybe<Array<Space>>,
  updatedAt: Scalars['DateTime'],
};


export type VenueSpacesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<SpaceOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<SpaceWhereInput>
};

export type VenueConnection = {
   __typename?: 'VenueConnection',
  aggregate: AggregateVenue,
  edges: Array<VenueEdge>,
  pageInfo: PageInfo,
};

export type VenueCreateInput = {
  address: Scalars['String'],
  id?: Maybe<Scalars['ID']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  name: Scalars['String'],
  placeID?: Maybe<Scalars['String']>,
  spaces?: Maybe<SpaceCreateManyWithoutVenueInput>,
};

export type VenueCreateOneWithoutSpacesInput = {
  connect?: Maybe<VenueWhereUniqueInput>,
  create?: Maybe<VenueCreateWithoutSpacesInput>,
};

export type VenueCreateWithoutSpacesInput = {
  address: Scalars['String'],
  id?: Maybe<Scalars['ID']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  name: Scalars['String'],
  placeID?: Maybe<Scalars['String']>,
};

export type VenueEdge = {
   __typename?: 'VenueEdge',
  cursor: Scalars['String'],
  node: Venue,
};

export enum VenueOrderByInput {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LatitudeAsc = 'latitude_ASC',
  LatitudeDesc = 'latitude_DESC',
  LongitudeAsc = 'longitude_ASC',
  LongitudeDesc = 'longitude_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PlaceIdAsc = 'placeID_ASC',
  PlaceIdDesc = 'placeID_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type VenueUpdateInput = {
  address?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
  placeID?: Maybe<Scalars['String']>,
  spaces?: Maybe<SpaceUpdateManyWithoutVenueInput>,
};

export type VenueUpdateManyMutationInput = {
  address?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
  placeID?: Maybe<Scalars['String']>,
};

export type VenueUpdateOneRequiredWithoutSpacesInput = {
  connect?: Maybe<VenueWhereUniqueInput>,
  create?: Maybe<VenueCreateWithoutSpacesInput>,
  update?: Maybe<VenueUpdateWithoutSpacesDataInput>,
  upsert?: Maybe<VenueUpsertWithoutSpacesInput>,
};

export type VenueUpdateWithoutSpacesDataInput = {
  address?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
  placeID?: Maybe<Scalars['String']>,
};

export type VenueUpsertWithoutSpacesInput = {
  create: VenueCreateWithoutSpacesInput,
  update: VenueUpdateWithoutSpacesDataInput,
};

export type VenueWhereInput = {
  address?: Maybe<Scalars['String']>,
  address_contains?: Maybe<Scalars['String']>,
  address_ends_with?: Maybe<Scalars['String']>,
  address_gt?: Maybe<Scalars['String']>,
  address_gte?: Maybe<Scalars['String']>,
  address_in?: Maybe<Array<Scalars['String']>>,
  address_lt?: Maybe<Scalars['String']>,
  address_lte?: Maybe<Scalars['String']>,
  address_not?: Maybe<Scalars['String']>,
  address_not_contains?: Maybe<Scalars['String']>,
  address_not_ends_with?: Maybe<Scalars['String']>,
  address_not_in?: Maybe<Array<Scalars['String']>>,
  address_not_starts_with?: Maybe<Scalars['String']>,
  address_starts_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<VenueWhereInput>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  latitude?: Maybe<Scalars['Float']>,
  latitude_gt?: Maybe<Scalars['Float']>,
  latitude_gte?: Maybe<Scalars['Float']>,
  latitude_in?: Maybe<Array<Scalars['Float']>>,
  latitude_lt?: Maybe<Scalars['Float']>,
  latitude_lte?: Maybe<Scalars['Float']>,
  latitude_not?: Maybe<Scalars['Float']>,
  latitude_not_in?: Maybe<Array<Scalars['Float']>>,
  longitude?: Maybe<Scalars['Float']>,
  longitude_gt?: Maybe<Scalars['Float']>,
  longitude_gte?: Maybe<Scalars['Float']>,
  longitude_in?: Maybe<Array<Scalars['Float']>>,
  longitude_lt?: Maybe<Scalars['Float']>,
  longitude_lte?: Maybe<Scalars['Float']>,
  longitude_not?: Maybe<Scalars['Float']>,
  longitude_not_in?: Maybe<Array<Scalars['Float']>>,
  name?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<VenueWhereInput>>,
  OR?: Maybe<Array<VenueWhereInput>>,
  placeID?: Maybe<Scalars['String']>,
  placeID_contains?: Maybe<Scalars['String']>,
  placeID_ends_with?: Maybe<Scalars['String']>,
  placeID_gt?: Maybe<Scalars['String']>,
  placeID_gte?: Maybe<Scalars['String']>,
  placeID_in?: Maybe<Array<Scalars['String']>>,
  placeID_lt?: Maybe<Scalars['String']>,
  placeID_lte?: Maybe<Scalars['String']>,
  placeID_not?: Maybe<Scalars['String']>,
  placeID_not_contains?: Maybe<Scalars['String']>,
  placeID_not_ends_with?: Maybe<Scalars['String']>,
  placeID_not_in?: Maybe<Array<Scalars['String']>>,
  placeID_not_starts_with?: Maybe<Scalars['String']>,
  placeID_starts_with?: Maybe<Scalars['String']>,
  spaces_every?: Maybe<SpaceWhereInput>,
  spaces_none?: Maybe<SpaceWhereInput>,
  spaces_some?: Maybe<SpaceWhereInput>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
};

export type VenueWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export enum WeekDay {
  Domingo = 'DOMINGO',
  Jueves = 'JUEVES',
  Lunes = 'LUNES',
  Martes = 'MARTES',
  Miercoles = 'MIERCOLES',
  Sabado = 'SABADO',
  Viernes = 'VIERNES'
}

export type SignUpUserMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String'],
  firstname: Scalars['String'],
  lastname: Scalars['String'],
  groupRequest?: Maybe<UserGroup>
};


export type SignUpUserMutation = { __typename?: 'Mutation', signUpUser: { __typename?: 'AuthPayload', token: string } };

export type LoginMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthPayload', token: string } };

export type RequestResetPasswordMutationVariables = {
  email: Scalars['String']
};


export type RequestResetPasswordMutation = { __typename?: 'Mutation', requestResetPassword: { __typename?: 'AuthPayload', token: string } };

export type ChangePasswordMutationVariables = {
  newPassword: Scalars['String'],
  key: Scalars['String']
};


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'AuthPayload', token: string } };

export type CreateGroupRequestMutationVariables = {
  groupRequest: UserGroup
};


export type CreateGroupRequestMutation = { __typename?: 'Mutation', createGroupRequest: { __typename?: 'AuthPayload', token: string } };

export type ApproveGroupRequestMutationVariables = {
  email: Scalars['String']
};


export type ApproveGroupRequestMutation = { __typename?: 'Mutation', approveGroupRequest: { __typename?: 'AuthPayload', token: string } };

export type RejectGroupRequestMutationVariables = {
  email: Scalars['String']
};


export type RejectGroupRequestMutation = { __typename?: 'Mutation', rejectGroupRequest: { __typename?: 'AuthPayload', token: string } };

export type MeQueryQueryVariables = {};


export type MeQueryQuery = { __typename?: 'Query', me: { __typename?: 'User', email: string, firstname: string, lastname: string, group: UserGroup, isAdmin: boolean } };


export const SignUpUserDocument = gql`
    mutation SignUpUser($email: String!, $password: String!, $firstname: String!, $lastname: String!, $groupRequest: UserGroup = PUBLIC) {
  signUpUser(firstname: $firstname, lastname: $lastname, email: $email, password: $password, groupRequest: $groupRequest) {
    token
  }
}
    `;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
    `;
export const RequestResetPasswordDocument = gql`
    mutation RequestResetPassword($email: String!) {
  requestResetPassword(email: $email) {
    token
  }
}
    `;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($newPassword: String!, $key: String!) {
  changePassword(key: $key, newPassword: $newPassword) {
    token
  }
}
    `;
export const CreateGroupRequestDocument = gql`
    mutation CreateGroupRequest($groupRequest: UserGroup!) {
  createGroupRequest(groupRequest: $groupRequest) {
    token
  }
}
    `;
export const ApproveGroupRequestDocument = gql`
    mutation ApproveGroupRequest($email: String!) {
  approveGroupRequest(email: $email) {
    token
  }
}
    `;
export const RejectGroupRequestDocument = gql`
    mutation RejectGroupRequest($email: String!) {
  rejectGroupRequest(email: $email) {
    token
  }
}
    `;
export const MeQueryDocument = gql`
    query MeQuery {
  me {
    email
    firstname
    lastname
    group
    isAdmin
  }
}
    `;
export function getSdk(client: GraphQLClient) {
  return {
    SignUpUser(variables: SignUpUserMutationVariables): Promise<SignUpUserMutation> {
      return client.request<SignUpUserMutation>(print(SignUpUserDocument), variables);
    },
    Login(variables: LoginMutationVariables): Promise<LoginMutation> {
      return client.request<LoginMutation>(print(LoginDocument), variables);
    },
    RequestResetPassword(variables: RequestResetPasswordMutationVariables): Promise<RequestResetPasswordMutation> {
      return client.request<RequestResetPasswordMutation>(print(RequestResetPasswordDocument), variables);
    },
    ChangePassword(variables: ChangePasswordMutationVariables): Promise<ChangePasswordMutation> {
      return client.request<ChangePasswordMutation>(print(ChangePasswordDocument), variables);
    },
    CreateGroupRequest(variables: CreateGroupRequestMutationVariables): Promise<CreateGroupRequestMutation> {
      return client.request<CreateGroupRequestMutation>(print(CreateGroupRequestDocument), variables);
    },
    ApproveGroupRequest(variables: ApproveGroupRequestMutationVariables): Promise<ApproveGroupRequestMutation> {
      return client.request<ApproveGroupRequestMutation>(print(ApproveGroupRequestDocument), variables);
    },
    RejectGroupRequest(variables: RejectGroupRequestMutationVariables): Promise<RejectGroupRequestMutation> {
      return client.request<RejectGroupRequestMutation>(print(RejectGroupRequestDocument), variables);
    },
    MeQuery(variables?: MeQueryQueryVariables): Promise<MeQueryQuery> {
      return client.request<MeQueryQuery>(print(MeQueryDocument), variables);
    }
  };
}
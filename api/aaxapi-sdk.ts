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
  UUID: any,
  DateTime: any,
};

export type AddressCreateManyWithoutAddressesInput = {
  connect?: Maybe<Array<AddressWhereUniqueInput>>,
  create?: Maybe<Array<AddressCreateWithoutOwnerInput>>,
};

export type AddressCreateWithoutOwnerInput = {
  address1: Scalars['String'],
  address2?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  code: Scalars['String'],
  country: Scalars['String'],
  createdAt?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['UUID']>,
  primary?: Maybe<Scalars['Boolean']>,
  region: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type AddressWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
};

export enum AppNodeStatus {
  Defered = 'DEFERED',
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type AsignaturaCreateOneWithoutAsignaturaInput = {
  connect?: Maybe<AsignaturaWhereUniqueInput>,
  create?: Maybe<AsignaturaCreateWithoutDesdoblesInput>,
};

export type AsignaturaCreateWithoutDesdoblesInput = {
  code: Scalars['String'],
  createdAt?: Maybe<Scalars['DateTime']>,
  creditosECTS?: Maybe<Scalars['Int']>,
  curso: CursoCreateOneWithoutCursoInput,
  description?: Maybe<Scalars['String']>,
  horasBalance?: Maybe<Scalars['Int']>,
  horasSemanasPlanificadas?: Maybe<Scalars['Int']>,
  horasSemanasPresenciales?: Maybe<Scalars['Int']>,
  horasTotalesPlanificadas?: Maybe<Scalars['Int']>,
  horasTotalesPresenciales?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['UUID']>,
  name: Scalars['String'],
  ratio: RatioCreateOneWithoutRatioInput,
  semsestre?: Maybe<Semestre>,
  shortName: Scalars['String'],
  spacerequirements?: Maybe<Scalars['String']>,
  titulacion: TitulacionCreateOneWithoutTitulacionInput,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type AsignaturaWhereUniqueInput = {
  code?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['UUID']>,
  name?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
};

export type AsistenciaCreateManyWithoutAsistenciaInput = {
  connect?: Maybe<Array<AsistenciaWhereUniqueInput>>,
  create?: Maybe<Array<AsistenciaCreateWithoutSesionInput>>,
};

export type AsistenciaCreateManyWithoutAsistenciasInput = {
  connect?: Maybe<Array<AsistenciaWhereUniqueInput>>,
  create?: Maybe<Array<AsistenciaCreateWithoutEstudianteInput>>,
};

export type AsistenciaCreateWithoutEstudianteInput = {
  atendida?: Maybe<Scalars['Boolean']>,
  dispensada?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['UUID']>,
  justificada?: Maybe<Scalars['Boolean']>,
  sesion: SesionCreateOneWithoutSesionInput,
};

export type AsistenciaCreateWithoutSesionInput = {
  atendida?: Maybe<Scalars['Boolean']>,
  dispensada?: Maybe<Scalars['Boolean']>,
  estudiante: UserCreateOneWithoutEstudianteInput,
  id?: Maybe<Scalars['UUID']>,
  justificada?: Maybe<Scalars['Boolean']>,
};

export type AsistenciaWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
};

/** Authorization payload token with the key required for the mutation action requested */
export type AuthPayload = {
   __typename?: 'AuthPayload',
  token: Scalars['String'],
};

export type ContentDocumentCreateManyWithoutContentDocumentsInput = {
  connect?: Maybe<Array<ContentDocumentWhereUniqueInput>>,
  create?: Maybe<Array<ContentDocumentCreateWithoutCreatorInput>>,
};

export type ContentDocumentCreateWithoutCreatorInput = {
  body: Scalars['String'],
  createdAt?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['UUID']>,
  metadata: Scalars['String'],
  subtitle: Scalars['String'],
  title: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type ContentDocumentWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
};

export type ConvocatoriaExamenCreateOneWithoutConvocatoriaInput = {
  connect?: Maybe<ConvocatoriaExamenWhereUniqueInput>,
  create?: Maybe<ConvocatoriaExamenCreateWithoutExamenesInput>,
};

export type ConvocatoriaExamenCreateWithoutExamenesInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  dateEnd: Scalars['DateTime'],
  dateStart: Scalars['DateTime'],
  id?: Maybe<Scalars['UUID']>,
  name: Scalars['String'],
  periodo: PeriodoOperativoCreateOneWithoutPeriodoInput,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type ConvocatoriaExamenWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
};

export type CursoCreateOneWithoutCursoInput = {
  connect?: Maybe<CursoWhereUniqueInput>,
  create?: Maybe<CursoCreateWithoutAsignaturasInput>,
};

export type CursoCreateWithoutAsignaturasInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['UUID']>,
  identifier: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type CursoWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
  identifier?: Maybe<Scalars['String']>,
};


export type DepartmentCreateOneWithoutDepartmentInput = {
  connect?: Maybe<DepartmentWhereUniqueInput>,
  create?: Maybe<DepartmentCreateWithoutMembersInput>,
};

export type DepartmentCreateWithoutMembersInput = {
  id?: Maybe<Scalars['UUID']>,
  name: Scalars['String'],
};

export type DepartmentWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
};

export type DesdobleCreateManyWithoutDesdoblesInput = {
  connect?: Maybe<Array<DesdobleWhereUniqueInput>>,
  create?: Maybe<Array<DesdobleCreateWithoutLeccionesInput>>,
};

export type DesdobleCreateWithoutLeccionesInput = {
  asignatura: AsignaturaCreateOneWithoutAsignaturaInput,
  createdAt?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['UUID']>,
  matriculas?: Maybe<MatriculaCreateManyWithoutMatriculasInput>,
  mencion: MencionCreateOneWithoutMencionInput,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type DesdobleWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
};

export type DeviceCreateManyWithoutDevicesInput = {
  connect?: Maybe<Array<DeviceWhereUniqueInput>>,
  create?: Maybe<Array<DeviceCreateWithoutOwnerInput>>,
};

export type DeviceCreateWithoutOwnerInput = {
  countryCode?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['UUID']>,
  notificationsDevice: Scalars['String'],
  notificationsPermission?: Maybe<Scalars['Boolean']>,
  number?: Maybe<Scalars['String']>,
  type?: Maybe<DeviceType>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  verified?: Maybe<Scalars['Boolean']>,
};

export enum DeviceType {
  Other = 'OTHER',
  Phone = 'PHONE',
  Tablet = 'TABLET'
}

export type DeviceWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
  notificationsDevice?: Maybe<Scalars['String']>,
};

export type DiscountCreateManyWithoutDiscountsInput = {
  connect?: Maybe<Array<DiscountWhereUniqueInput>>,
  create?: Maybe<Array<DiscountCreateWithoutProductInput>>,
};

export type DiscountCreateOneWithoutDiscountInput = {
  connect?: Maybe<DiscountWhereUniqueInput>,
  create?: Maybe<DiscountCreateWithoutItemsInput>,
};

export type DiscountCreateWithoutItemsInput = {
  code: Scalars['String'],
  createdAt?: Maybe<Scalars['DateTime']>,
  description: Scalars['String'],
  discountRequests?: Maybe<DiscountRequestCreateManyWithoutDiscountRequestsInput>,
  id?: Maybe<Scalars['UUID']>,
  name: Scalars['String'],
  product: ProductCreateOneWithoutProductInput,
  requirements: Scalars['String'],
  unitPrice: Scalars['Float'],
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type DiscountCreateWithoutProductInput = {
  code: Scalars['String'],
  createdAt?: Maybe<Scalars['DateTime']>,
  description: Scalars['String'],
  discountRequests?: Maybe<DiscountRequestCreateManyWithoutDiscountRequestsInput>,
  id?: Maybe<Scalars['UUID']>,
  items?: Maybe<ItemCreateManyWithoutItemsInput>,
  name: Scalars['String'],
  requirements: Scalars['String'],
  unitPrice: Scalars['Float'],
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type DiscountRequestCreatedocumentationInput = {
  set?: Maybe<Array<Scalars['String']>>,
};

export type DiscountRequestCreateManyWithoutDiscountRequestsInput = {
  connect?: Maybe<Array<DiscountRequestWhereUniqueInput>>,
  create?: Maybe<Array<DiscountRequestCreateWithoutDiscountInput>>,
};

export type DiscountRequestCreateWithoutDiscountInput = {
  applied?: Maybe<Scalars['Boolean']>,
  approved?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  documentation?: Maybe<DiscountRequestCreatedocumentationInput>,
  id?: Maybe<Scalars['UUID']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  user: UserCreateOneWithoutUserInput,
};

export type DiscountRequestWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
};

export type DiscountWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
};

export type EstudioCreateOneWithoutEstudioInput = {
  connect?: Maybe<EstudioWhereUniqueInput>,
  create?: Maybe<EstudioCreateWithoutTitulacionesInput>,
};

export type EstudioCreateWithoutTitulacionesInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['UUID']>,
  name: Scalars['String'],
  shortName: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type EstudioWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
  name?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
};

export type EventCreateManyWithoutEventsInput = {
  connect?: Maybe<Array<EventWhereUniqueInput>>,
  create?: Maybe<Array<EventCreateWithoutAuthorInput>>,
};

export type EventCreateWithoutAuthorInput = {
  access?: Maybe<Scalars['String']>,
  accessPoint?: Maybe<Scalars['String']>,
  body: Scalars['String'],
  createdAt?: Maybe<Scalars['DateTime']>,
  date: Scalars['DateTime'],
  id?: Maybe<Scalars['UUID']>,
  imageURL?: Maybe<Scalars['String']>,
  organizer?: Maybe<Scalars['String']>,
  place: SpaceCreateOneWithoutPlaceInput,
  status?: Maybe<AppNodeStatus>,
  subtitle: Scalars['String'],
  target: UserGroup,
  title: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type EventWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
};

export type ExamenCreateManyWithoutExamenesInput = {
  connect?: Maybe<Array<ExamenWhereUniqueInput>>,
  create?: Maybe<Array<ExamenCreateWithoutEspacioInput>>,
};

export type ExamenCreateWithoutEspacioInput = {
  convocatoria: ConvocatoriaExamenCreateOneWithoutConvocatoriaInput,
  createdAt?: Maybe<Scalars['DateTime']>,
  dateTime: Scalars['DateTime'],
  endTime: Scalars['String'],
  id?: Maybe<Scalars['UUID']>,
  leccion: LeccionCreateOneWithoutLeccionInput,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type ExamenWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
};

export type ItemCreateManyWithoutItemsInput = {
  connect?: Maybe<Array<ItemWhereUniqueInput>>,
  create?: Maybe<Array<ItemCreateWithoutOrderInput>>,
};

export type ItemCreateWithoutOrderInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  discount?: Maybe<DiscountCreateOneWithoutDiscountInput>,
  id?: Maybe<Scalars['UUID']>,
  orderPrice: Scalars['Float'],
  product: ProductCreateOneWithoutProductInput,
  quantity: Scalars['Int'],
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type ItemWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
};

export type LeccionCreateManyWithoutLeccionesDisponiblesInput = {
  connect?: Maybe<Array<LeccionWhereUniqueInput>>,
  create?: Maybe<Array<LeccionCreateWithoutProfesoresDisponiblesInput>>,
};

export type LeccionCreateManyWithoutLeccionesGestionadasInput = {
  connect?: Maybe<Array<LeccionWhereUniqueInput>>,
  create?: Maybe<Array<LeccionCreateWithoutGestorInput>>,
};

export type LeccionCreateManyWithoutLeccionesInput = {
  connect?: Maybe<Array<LeccionWhereUniqueInput>>,
  create?: Maybe<Array<LeccionCreateWithoutPeriodoInput>>,
};

export type LeccionCreateOneWithoutLeccionInput = {
  connect?: Maybe<LeccionWhereUniqueInput>,
  create?: Maybe<LeccionCreateWithoutSesionesInput>,
};

export type LeccionCreateWithoutGestorInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  desdobles?: Maybe<DesdobleCreateManyWithoutDesdoblesInput>,
  examenes?: Maybe<ExamenCreateManyWithoutExamenesInput>,
  id?: Maybe<Scalars['UUID']>,
  name: Scalars['String'],
  periodo: PeriodoOperativoCreateOneWithoutPeriodoInput,
  profesoresDisponibles?: Maybe<UserCreateManyWithoutProfesoresDisponiblesInput>,
  recurrencias?: Maybe<RecurrenciaCreateManyWithoutRecurrenciasInput>,
  sesiones?: Maybe<SesionCreateManyWithoutSesionesInput>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type LeccionCreateWithoutPeriodoInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  desdobles?: Maybe<DesdobleCreateManyWithoutDesdoblesInput>,
  examenes?: Maybe<ExamenCreateManyWithoutExamenesInput>,
  gestor: UserCreateOneWithoutGestorInput,
  id?: Maybe<Scalars['UUID']>,
  name: Scalars['String'],
  profesoresDisponibles?: Maybe<UserCreateManyWithoutProfesoresDisponiblesInput>,
  recurrencias?: Maybe<RecurrenciaCreateManyWithoutRecurrenciasInput>,
  sesiones?: Maybe<SesionCreateManyWithoutSesionesInput>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type LeccionCreateWithoutProfesoresDisponiblesInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  desdobles?: Maybe<DesdobleCreateManyWithoutDesdoblesInput>,
  examenes?: Maybe<ExamenCreateManyWithoutExamenesInput>,
  gestor: UserCreateOneWithoutGestorInput,
  id?: Maybe<Scalars['UUID']>,
  name: Scalars['String'],
  periodo: PeriodoOperativoCreateOneWithoutPeriodoInput,
  recurrencias?: Maybe<RecurrenciaCreateManyWithoutRecurrenciasInput>,
  sesiones?: Maybe<SesionCreateManyWithoutSesionesInput>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type LeccionCreateWithoutSesionesInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  desdobles?: Maybe<DesdobleCreateManyWithoutDesdoblesInput>,
  examenes?: Maybe<ExamenCreateManyWithoutExamenesInput>,
  gestor: UserCreateOneWithoutGestorInput,
  id?: Maybe<Scalars['UUID']>,
  name: Scalars['String'],
  periodo: PeriodoOperativoCreateOneWithoutPeriodoInput,
  profesoresDisponibles?: Maybe<UserCreateManyWithoutProfesoresDisponiblesInput>,
  recurrencias?: Maybe<RecurrenciaCreateManyWithoutRecurrenciasInput>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type LeccionWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
};

export type MatriculaCreateManyWithoutMatriculasInput = {
  connect?: Maybe<Array<MatriculaWhereUniqueInput>>,
  create?: Maybe<Array<MatriculaCreateWithoutDesdobleInput>>,
};

export type MatriculaCreateWithoutDesdobleInput = {
  alumno: UserCreateOneWithoutAlumnoInput,
  createdAt?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['UUID']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type MatriculaWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
};

export type MediaCategoryCreateOneWithoutCategoryInput = {
  connect?: Maybe<MediaCategoryWhereUniqueInput>,
  create?: Maybe<MediaCategoryCreateWithoutFilesInput>,
};

export type MediaCategoryCreateWithoutFilesInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['UUID']>,
  name: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type MediaCategoryWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
  name?: Maybe<Scalars['String']>,
};

export type MediaCreateManyWithoutMediasInput = {
  connect?: Maybe<Array<MediaWhereUniqueInput>>,
  create?: Maybe<Array<MediaCreateWithoutUploaderInput>>,
};

export type MediaCreateWithoutUploaderInput = {
  category: MediaCategoryCreateOneWithoutCategoryInput,
  createdAt?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['UUID']>,
  metadata: Scalars['String'],
  name: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
  url: Scalars['String'],
};

export type MediaWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
};

export type MencionCreateOneWithoutMencionInput = {
  connect?: Maybe<MencionWhereUniqueInput>,
  create?: Maybe<MencionCreateWithoutDesdoblesInput>,
};

export type MencionCreateWithoutDesdoblesInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['UUID']>,
  name: Scalars['String'],
  shortName: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type MencionWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
  name?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  approveGroupRequest: AuthPayload,
  /** Changes the password of the account whose reset request matches the provided key. */
  changePassword: AuthPayload,
  createGroupRequest: AuthPayload,
  createSpace: Space,
  createVenue: Venue,
  /** 
 * Login a registered user.
   *                   Returns the token required for authentication.
 **/
  login: AuthPayload,
  rejectGroupRequest: AuthPayload,
  /** 
 * Creates a reset password request, locks the account requested, and sends an
   * email to the requestee with a link to create a new password.
   *                   Returns the key to restore the password.
 **/
  requestResetPassword: AuthPayload,
  /** 
 * Signs up a new user.
   *                   Returns the token required to verify its email account.
 **/
  signUpUser: AuthPayload,
};


export type MutationApproveGroupRequestArgs = {
  email: Scalars['String']
};


export type MutationChangePasswordArgs = {
  key: Scalars['String'],
  newPassword: Scalars['String']
};


export type MutationCreateGroupRequestArgs = {
  groupRequest: UserGroup
};


export type MutationCreateSpaceArgs = {
  data: SpaceCreateInput
};


export type MutationCreateVenueArgs = {
  data: VenueCreateInput
};


export type MutationLoginArgs = {
  email: Scalars['String'],
  password: Scalars['String']
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

export type NewsCreateManyWithoutNewsesInput = {
  connect?: Maybe<Array<NewsWhereUniqueInput>>,
  create?: Maybe<Array<NewsCreateWithoutAuthorInput>>,
};

export type NewsCreateWithoutAuthorInput = {
  body: Scalars['String'],
  category?: Maybe<NewsFeedCategories>,
  createdAt?: Maybe<Scalars['DateTime']>,
  expiration: Scalars['DateTime'],
  featured?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['UUID']>,
  imageURL?: Maybe<Scalars['String']>,
  status?: Maybe<AppNodeStatus>,
  subtitle: Scalars['String'],
  target: UserGroup,
  title: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export enum NewsFeedCategories {
  Alert = 'ALERT',
  Call = 'CALL',
  News = 'NEWS'
}

export type NewsWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
};

export type OfficialDocumentCreateManyWithoutOfficialDocumentsInput = {
  connect?: Maybe<Array<OfficialDocumentWhereUniqueInput>>,
  create?: Maybe<Array<OfficialDocumentCreateWithoutOwnerInput>>,
};

export type OfficialDocumentCreateWithoutOwnerInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  expiration: Scalars['DateTime'],
  id?: Maybe<Scalars['UUID']>,
  number: Scalars['String'],
  other?: Maybe<Scalars['String']>,
  type?: Maybe<OfficialDocumentType>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export enum OfficialDocumentType {
  Drivinglicense = 'DRIVINGLICENSE',
  Nationalid = 'NATIONALID',
  Other = 'OTHER',
  Passport = 'PASSPORT',
  Socialsecurity = 'SOCIALSECURITY'
}

export type OfficialDocumentWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
  number?: Maybe<Scalars['String']>,
};

export type OrderCreateManyWithoutOrdersInput = {
  connect?: Maybe<Array<OrderWhereUniqueInput>>,
  create?: Maybe<Array<OrderCreateWithoutCustomerInput>>,
};

export type OrderCreateWithoutCustomerInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['UUID']>,
  items?: Maybe<ItemCreateManyWithoutItemsInput>,
  metadata: Scalars['String'],
  paymentDue: Scalars['DateTime'],
  paymentSettled?: Maybe<Scalars['Boolean']>,
  reference: Scalars['String'],
  total: Scalars['Float'],
  transactions?: Maybe<TransactionCreateManyWithoutTransactionsInput>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  vatRate?: Maybe<Scalars['Int']>,
};

export type OrderWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
  reference?: Maybe<Scalars['String']>,
};

export type PeriodoOperativoCreateOneWithoutPeriodoInput = {
  connect?: Maybe<PeriodoOperativoWhereUniqueInput>,
  create?: Maybe<PeriodoOperativoCreateWithoutConvocatoriasExamenesInput>,
};

export type PeriodoOperativoCreateWithoutConvocatoriasExamenesInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['UUID']>,
  lecciones?: Maybe<LeccionCreateManyWithoutLeccionesInput>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  yearEnd: Scalars['Int'],
  yearStart: Scalars['Int'],
};

export type PeriodoOperativoWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
};

export type ProductCategoryCreateOneWithoutCategoryInput = {
  connect?: Maybe<ProductCategoryWhereUniqueInput>,
  create?: Maybe<ProductCategoryCreateWithoutProductsInput>,
};

export type ProductCategoryCreateWithoutProductsInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['UUID']>,
  name: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type ProductCategoryWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
  name?: Maybe<Scalars['String']>,
};

export type ProductCreateimageUrLsInput = {
  set?: Maybe<Array<Scalars['String']>>,
};

export type ProductCreateOneWithoutProductInput = {
  connect?: Maybe<ProductWhereUniqueInput>,
  create?: Maybe<ProductCreateWithoutOrdersInput>,
};

export type ProductCreateWithoutOrdersInput = {
  category: ProductCategoryCreateOneWithoutCategoryInput,
  content: Scalars['String'],
  createdAt?: Maybe<Scalars['DateTime']>,
  description: Scalars['String'],
  discounts?: Maybe<DiscountCreateManyWithoutDiscountsInput>,
  id?: Maybe<Scalars['UUID']>,
  imageURLs?: Maybe<ProductCreateimageUrLsInput>,
  name: Scalars['String'],
  unitPrice: Scalars['Float'],
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type ProductWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
};

export type Query = {
   __typename?: 'Query',
  /** Query data of the currently authenticated user */
  me: User,
  space?: Maybe<Space>,
  spaces: Array<Space>,
  venue?: Maybe<Venue>,
  venues: Array<Venue>,
};


export type QuerySpaceArgs = {
  where: SpaceWhereUniqueInput
};


export type QuerySpacesArgs = {
  after?: Maybe<Scalars['UUID']>,
  before?: Maybe<Scalars['UUID']>,
  first: Scalars['Int'],
  last: Scalars['Int'],
  skip: Scalars['Int']
};


export type QueryVenueArgs = {
  where: VenueWhereUniqueInput
};


export type QueryVenuesArgs = {
  after?: Maybe<Scalars['UUID']>,
  before?: Maybe<Scalars['UUID']>,
  first: Scalars['Int'],
  last: Scalars['Int'],
  skip: Scalars['Int']
};

export type RatioCreateOneWithoutRatioInput = {
  connect?: Maybe<RatioWhereUniqueInput>,
  create?: Maybe<RatioCreateWithoutAsignaturasInput>,
};

export type RatioCreateWithoutAsignaturasInput = {
  id?: Maybe<Scalars['UUID']>,
  multiplier?: Maybe<Scalars['Int']>,
  name: Scalars['String'],
};

export type RatioWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
  name?: Maybe<Scalars['String']>,
};

export type RecurrenciaCreateManyWithoutLeccionesPlanificadasInput = {
  connect?: Maybe<Array<RecurrenciaWhereUniqueInput>>,
  create?: Maybe<Array<RecurrenciaCreateWithoutPlannedSpacesInput>>,
};

export type RecurrenciaCreateManyWithoutRecurrenciasInput = {
  connect?: Maybe<Array<RecurrenciaWhereUniqueInput>>,
  create?: Maybe<Array<RecurrenciaCreateWithoutLeccionInput>>,
};

export type RecurrenciaCreateWithoutLeccionInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['UUID']>,
  plannedSpaces?: Maybe<SpaceCreateManyWithoutPlannedSpacesInput>,
  timeEnd: Scalars['String'],
  timeStart: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
  weekday?: Maybe<WeekDay>,
};

export type RecurrenciaCreateWithoutPlannedSpacesInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['UUID']>,
  leccion: LeccionCreateOneWithoutLeccionInput,
  timeEnd: Scalars['String'],
  timeStart: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
  weekday?: Maybe<WeekDay>,
};

export type RecurrenciaWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
};

export type RoleCreateManyWithoutRolesInput = {
  connect?: Maybe<Array<RoleWhereUniqueInput>>,
  create?: Maybe<Array<RoleCreateWithoutUsersInput>>,
};

export type RoleCreateWithoutUsersInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['UUID']>,
  name: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type RoleWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
};

export enum Semestre {
  Anual = 'ANUAL',
  Semestre_1 = 'SEMESTRE_1',
  Semestre_2 = 'SEMESTRE_2'
}

export type SesionCreateManyWithoutSesionesInput = {
  connect?: Maybe<Array<SesionWhereUniqueInput>>,
  create?: Maybe<Array<SesionCreateWithoutAtInput>>,
};

export type SesionCreateOneWithoutSesionInput = {
  connect?: Maybe<SesionWhereUniqueInput>,
  create?: Maybe<SesionCreateWithoutAsistenciaInput>,
};

export type SesionCreateWithoutAsistenciaInput = {
  at: SpaceCreateOneWithoutAtInput,
  by: UserCreateOneWithoutByInput,
  closedAt: Scalars['DateTime'],
  createdAt?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['UUID']>,
  leccion: LeccionCreateOneWithoutLeccionInput,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type SesionCreateWithoutAtInput = {
  asistencia?: Maybe<AsistenciaCreateManyWithoutAsistenciaInput>,
  by: UserCreateOneWithoutByInput,
  closedAt: Scalars['DateTime'],
  createdAt?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['UUID']>,
  leccion: LeccionCreateOneWithoutLeccionInput,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type SesionWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
};

export type SocialLinkCreateManyWithoutSocialNetworkLinksInput = {
  connect?: Maybe<Array<SocialLinkWhereUniqueInput>>,
  create?: Maybe<Array<SocialLinkCreateWithoutOwnerInput>>,
};

export type SocialLinkCreateWithoutOwnerInput = {
  id?: Maybe<Scalars['UUID']>,
  link: Scalars['String'],
  socialNetwork: SocialNetworkCreateOneWithoutSocialNetworkInput,
};

export type SocialLinkWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
  link?: Maybe<Scalars['String']>,
};

export type SocialNetworkCreateOneWithoutSocialNetworkInput = {
  connect?: Maybe<SocialNetworkWhereUniqueInput>,
  create?: Maybe<SocialNetworkCreateWithoutUserLinksInput>,
};

export type SocialNetworkCreateWithoutUserLinksInput = {
  baseURL: Scalars['String'],
  id?: Maybe<Scalars['UUID']>,
  name: Scalars['String'],
  ownURL: Scalars['String'],
};

export type SocialNetworkWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
};

/** Space/room/area in a venue */
export type Space = {
   __typename?: 'Space',
  id: Scalars['UUID'],
  name: Scalars['String'],
  venue: Venue,
};

export type SpaceCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  events?: Maybe<EventCreateManyWithoutEventsInput>,
  examenes?: Maybe<ExamenCreateManyWithoutExamenesInput>,
  id?: Maybe<Scalars['UUID']>,
  leccionesPlanificadas?: Maybe<RecurrenciaCreateManyWithoutLeccionesPlanificadasInput>,
  name: Scalars['String'],
  sesiones?: Maybe<SesionCreateManyWithoutSesionesInput>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  venue: VenueCreateOneWithoutVenueInput,
};

export type SpaceCreateManyWithoutPlannedSpacesInput = {
  connect?: Maybe<Array<SpaceWhereUniqueInput>>,
  create?: Maybe<Array<SpaceCreateWithoutLeccionesPlanificadasInput>>,
};

export type SpaceCreateManyWithoutSpacesInput = {
  connect?: Maybe<Array<SpaceWhereUniqueInput>>,
  create?: Maybe<Array<SpaceCreateWithoutVenueInput>>,
};

export type SpaceCreateOneWithoutAtInput = {
  connect?: Maybe<SpaceWhereUniqueInput>,
  create?: Maybe<SpaceCreateWithoutSesionesInput>,
};

export type SpaceCreateOneWithoutPlaceInput = {
  connect?: Maybe<SpaceWhereUniqueInput>,
  create?: Maybe<SpaceCreateWithoutEventsInput>,
};

export type SpaceCreateWithoutEventsInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  examenes?: Maybe<ExamenCreateManyWithoutExamenesInput>,
  id?: Maybe<Scalars['UUID']>,
  leccionesPlanificadas?: Maybe<RecurrenciaCreateManyWithoutLeccionesPlanificadasInput>,
  name: Scalars['String'],
  sesiones?: Maybe<SesionCreateManyWithoutSesionesInput>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  venue: VenueCreateOneWithoutVenueInput,
};

export type SpaceCreateWithoutLeccionesPlanificadasInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  events?: Maybe<EventCreateManyWithoutEventsInput>,
  examenes?: Maybe<ExamenCreateManyWithoutExamenesInput>,
  id?: Maybe<Scalars['UUID']>,
  name: Scalars['String'],
  sesiones?: Maybe<SesionCreateManyWithoutSesionesInput>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  venue: VenueCreateOneWithoutVenueInput,
};

export type SpaceCreateWithoutSesionesInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  events?: Maybe<EventCreateManyWithoutEventsInput>,
  examenes?: Maybe<ExamenCreateManyWithoutExamenesInput>,
  id?: Maybe<Scalars['UUID']>,
  leccionesPlanificadas?: Maybe<RecurrenciaCreateManyWithoutLeccionesPlanificadasInput>,
  name: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
  venue: VenueCreateOneWithoutVenueInput,
};

export type SpaceCreateWithoutVenueInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  events?: Maybe<EventCreateManyWithoutEventsInput>,
  examenes?: Maybe<ExamenCreateManyWithoutExamenesInput>,
  id?: Maybe<Scalars['UUID']>,
  leccionesPlanificadas?: Maybe<RecurrenciaCreateManyWithoutLeccionesPlanificadasInput>,
  name: Scalars['String'],
  sesiones?: Maybe<SesionCreateManyWithoutSesionesInput>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type SpaceWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
};

export type TitulacionCreateOneWithoutTitulacionInput = {
  connect?: Maybe<TitulacionWhereUniqueInput>,
  create?: Maybe<TitulacionCreateWithoutAsignaturasInput>,
};

export type TitulacionCreateWithoutAsignaturasInput = {
  code: Scalars['String'],
  createdAt?: Maybe<Scalars['DateTime']>,
  description?: Maybe<Scalars['String']>,
  estudio: EstudioCreateOneWithoutEstudioInput,
  id?: Maybe<Scalars['UUID']>,
  name: Scalars['String'],
  shortName: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type TitulacionWhereUniqueInput = {
  code?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['UUID']>,
  name?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
};

export type TransactionCreateManyWithoutTransactionsInput = {
  connect?: Maybe<Array<TransactionWhereUniqueInput>>,
  create?: Maybe<Array<TransactionCreateWithoutOrderInput>>,
};

export type TransactionCreateWithoutOrderInput = {
  amount: Scalars['Int'],
  createdAt?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['UUID']>,
  reference: Scalars['String'],
  type?: Maybe<TxType>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type TransactionWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
};

export enum TxType {
  Payment = 'PAYMENT',
  Purchase = 'PURCHASE',
  Receipt = 'RECEIPT',
  Sale = 'SALE'
}

/** Registered user */
export type User = {
   __typename?: 'User',
  email: Scalars['String'],
  emailVerified: Scalars['Boolean'],
  firstname: Scalars['String'],
  group: UserGroup,
  groupRequest?: Maybe<UserGroup>,
  id: Scalars['UUID'],
  isAdmin: Scalars['Boolean'],
  lastname: Scalars['String'],
  password: Scalars['String'],
};

export type UserCreateManyWithoutProfesoresDisponiblesInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>,
  create?: Maybe<Array<UserCreateWithoutLeccionesDisponiblesInput>>,
};

export type UserCreateOneWithoutAlumnoInput = {
  connect?: Maybe<UserWhereUniqueInput>,
  create?: Maybe<UserCreateWithoutMatriculasInput>,
};

export type UserCreateOneWithoutByInput = {
  connect?: Maybe<UserWhereUniqueInput>,
  create?: Maybe<UserCreateWithoutSesionesInput>,
};

export type UserCreateOneWithoutEstudianteInput = {
  connect?: Maybe<UserWhereUniqueInput>,
  create?: Maybe<UserCreateWithoutAsistenciasInput>,
};

export type UserCreateOneWithoutGestorInput = {
  connect?: Maybe<UserWhereUniqueInput>,
  create?: Maybe<UserCreateWithoutLeccionesGestionadasInput>,
};

export type UserCreateOneWithoutUserInput = {
  connect?: Maybe<UserWhereUniqueInput>,
  create?: Maybe<UserCreateWithoutDiscountRequestsInput>,
};

export type UserCreateWithoutAsistenciasInput = {
  addresses?: Maybe<AddressCreateManyWithoutAddressesInput>,
  avatar?: Maybe<Scalars['String']>,
  contentDocuments?: Maybe<ContentDocumentCreateManyWithoutContentDocumentsInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  department?: Maybe<DepartmentCreateOneWithoutDepartmentInput>,
  devices?: Maybe<DeviceCreateManyWithoutDevicesInput>,
  discountRequests?: Maybe<DiscountRequestCreateManyWithoutDiscountRequestsInput>,
  email: Scalars['String'],
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventCreateManyWithoutEventsInput>,
  firstname: Scalars['String'],
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  id?: Maybe<Scalars['UUID']>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname: Scalars['String'],
  leccionesDisponibles?: Maybe<LeccionCreateManyWithoutLeccionesDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionCreateManyWithoutLeccionesGestionadasInput>,
  matriculas?: Maybe<MatriculaCreateManyWithoutMatriculasInput>,
  medias?: Maybe<MediaCreateManyWithoutMediasInput>,
  metadata?: Maybe<Scalars['String']>,
  newses?: Maybe<NewsCreateManyWithoutNewsesInput>,
  officialDocuments?: Maybe<OfficialDocumentCreateManyWithoutOfficialDocumentsInput>,
  orders?: Maybe<OrderCreateManyWithoutOrdersInput>,
  password: Scalars['String'],
  roles?: Maybe<RoleCreateManyWithoutRolesInput>,
  sesiones?: Maybe<SesionCreateManyWithoutSesionesInput>,
  socialNetworkLinks?: Maybe<SocialLinkCreateManyWithoutSocialNetworkLinksInput>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type UserCreateWithoutDiscountRequestsInput = {
  addresses?: Maybe<AddressCreateManyWithoutAddressesInput>,
  asistencias?: Maybe<AsistenciaCreateManyWithoutAsistenciasInput>,
  avatar?: Maybe<Scalars['String']>,
  contentDocuments?: Maybe<ContentDocumentCreateManyWithoutContentDocumentsInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  department?: Maybe<DepartmentCreateOneWithoutDepartmentInput>,
  devices?: Maybe<DeviceCreateManyWithoutDevicesInput>,
  email: Scalars['String'],
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventCreateManyWithoutEventsInput>,
  firstname: Scalars['String'],
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  id?: Maybe<Scalars['UUID']>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname: Scalars['String'],
  leccionesDisponibles?: Maybe<LeccionCreateManyWithoutLeccionesDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionCreateManyWithoutLeccionesGestionadasInput>,
  matriculas?: Maybe<MatriculaCreateManyWithoutMatriculasInput>,
  medias?: Maybe<MediaCreateManyWithoutMediasInput>,
  metadata?: Maybe<Scalars['String']>,
  newses?: Maybe<NewsCreateManyWithoutNewsesInput>,
  officialDocuments?: Maybe<OfficialDocumentCreateManyWithoutOfficialDocumentsInput>,
  orders?: Maybe<OrderCreateManyWithoutOrdersInput>,
  password: Scalars['String'],
  roles?: Maybe<RoleCreateManyWithoutRolesInput>,
  sesiones?: Maybe<SesionCreateManyWithoutSesionesInput>,
  socialNetworkLinks?: Maybe<SocialLinkCreateManyWithoutSocialNetworkLinksInput>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type UserCreateWithoutLeccionesDisponiblesInput = {
  addresses?: Maybe<AddressCreateManyWithoutAddressesInput>,
  asistencias?: Maybe<AsistenciaCreateManyWithoutAsistenciasInput>,
  avatar?: Maybe<Scalars['String']>,
  contentDocuments?: Maybe<ContentDocumentCreateManyWithoutContentDocumentsInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  department?: Maybe<DepartmentCreateOneWithoutDepartmentInput>,
  devices?: Maybe<DeviceCreateManyWithoutDevicesInput>,
  discountRequests?: Maybe<DiscountRequestCreateManyWithoutDiscountRequestsInput>,
  email: Scalars['String'],
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventCreateManyWithoutEventsInput>,
  firstname: Scalars['String'],
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  id?: Maybe<Scalars['UUID']>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname: Scalars['String'],
  leccionesGestionadas?: Maybe<LeccionCreateManyWithoutLeccionesGestionadasInput>,
  matriculas?: Maybe<MatriculaCreateManyWithoutMatriculasInput>,
  medias?: Maybe<MediaCreateManyWithoutMediasInput>,
  metadata?: Maybe<Scalars['String']>,
  newses?: Maybe<NewsCreateManyWithoutNewsesInput>,
  officialDocuments?: Maybe<OfficialDocumentCreateManyWithoutOfficialDocumentsInput>,
  orders?: Maybe<OrderCreateManyWithoutOrdersInput>,
  password: Scalars['String'],
  roles?: Maybe<RoleCreateManyWithoutRolesInput>,
  sesiones?: Maybe<SesionCreateManyWithoutSesionesInput>,
  socialNetworkLinks?: Maybe<SocialLinkCreateManyWithoutSocialNetworkLinksInput>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type UserCreateWithoutLeccionesGestionadasInput = {
  addresses?: Maybe<AddressCreateManyWithoutAddressesInput>,
  asistencias?: Maybe<AsistenciaCreateManyWithoutAsistenciasInput>,
  avatar?: Maybe<Scalars['String']>,
  contentDocuments?: Maybe<ContentDocumentCreateManyWithoutContentDocumentsInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  department?: Maybe<DepartmentCreateOneWithoutDepartmentInput>,
  devices?: Maybe<DeviceCreateManyWithoutDevicesInput>,
  discountRequests?: Maybe<DiscountRequestCreateManyWithoutDiscountRequestsInput>,
  email: Scalars['String'],
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventCreateManyWithoutEventsInput>,
  firstname: Scalars['String'],
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  id?: Maybe<Scalars['UUID']>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname: Scalars['String'],
  leccionesDisponibles?: Maybe<LeccionCreateManyWithoutLeccionesDisponiblesInput>,
  matriculas?: Maybe<MatriculaCreateManyWithoutMatriculasInput>,
  medias?: Maybe<MediaCreateManyWithoutMediasInput>,
  metadata?: Maybe<Scalars['String']>,
  newses?: Maybe<NewsCreateManyWithoutNewsesInput>,
  officialDocuments?: Maybe<OfficialDocumentCreateManyWithoutOfficialDocumentsInput>,
  orders?: Maybe<OrderCreateManyWithoutOrdersInput>,
  password: Scalars['String'],
  roles?: Maybe<RoleCreateManyWithoutRolesInput>,
  sesiones?: Maybe<SesionCreateManyWithoutSesionesInput>,
  socialNetworkLinks?: Maybe<SocialLinkCreateManyWithoutSocialNetworkLinksInput>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type UserCreateWithoutMatriculasInput = {
  addresses?: Maybe<AddressCreateManyWithoutAddressesInput>,
  asistencias?: Maybe<AsistenciaCreateManyWithoutAsistenciasInput>,
  avatar?: Maybe<Scalars['String']>,
  contentDocuments?: Maybe<ContentDocumentCreateManyWithoutContentDocumentsInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  department?: Maybe<DepartmentCreateOneWithoutDepartmentInput>,
  devices?: Maybe<DeviceCreateManyWithoutDevicesInput>,
  discountRequests?: Maybe<DiscountRequestCreateManyWithoutDiscountRequestsInput>,
  email: Scalars['String'],
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventCreateManyWithoutEventsInput>,
  firstname: Scalars['String'],
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  id?: Maybe<Scalars['UUID']>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname: Scalars['String'],
  leccionesDisponibles?: Maybe<LeccionCreateManyWithoutLeccionesDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionCreateManyWithoutLeccionesGestionadasInput>,
  medias?: Maybe<MediaCreateManyWithoutMediasInput>,
  metadata?: Maybe<Scalars['String']>,
  newses?: Maybe<NewsCreateManyWithoutNewsesInput>,
  officialDocuments?: Maybe<OfficialDocumentCreateManyWithoutOfficialDocumentsInput>,
  orders?: Maybe<OrderCreateManyWithoutOrdersInput>,
  password: Scalars['String'],
  roles?: Maybe<RoleCreateManyWithoutRolesInput>,
  sesiones?: Maybe<SesionCreateManyWithoutSesionesInput>,
  socialNetworkLinks?: Maybe<SocialLinkCreateManyWithoutSocialNetworkLinksInput>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type UserCreateWithoutSesionesInput = {
  addresses?: Maybe<AddressCreateManyWithoutAddressesInput>,
  asistencias?: Maybe<AsistenciaCreateManyWithoutAsistenciasInput>,
  avatar?: Maybe<Scalars['String']>,
  contentDocuments?: Maybe<ContentDocumentCreateManyWithoutContentDocumentsInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  department?: Maybe<DepartmentCreateOneWithoutDepartmentInput>,
  devices?: Maybe<DeviceCreateManyWithoutDevicesInput>,
  discountRequests?: Maybe<DiscountRequestCreateManyWithoutDiscountRequestsInput>,
  email: Scalars['String'],
  emailVerified?: Maybe<Scalars['Boolean']>,
  events?: Maybe<EventCreateManyWithoutEventsInput>,
  firstname: Scalars['String'],
  group?: Maybe<UserGroup>,
  groupRequest?: Maybe<UserGroup>,
  id?: Maybe<Scalars['UUID']>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastname: Scalars['String'],
  leccionesDisponibles?: Maybe<LeccionCreateManyWithoutLeccionesDisponiblesInput>,
  leccionesGestionadas?: Maybe<LeccionCreateManyWithoutLeccionesGestionadasInput>,
  matriculas?: Maybe<MatriculaCreateManyWithoutMatriculasInput>,
  medias?: Maybe<MediaCreateManyWithoutMediasInput>,
  metadata?: Maybe<Scalars['String']>,
  newses?: Maybe<NewsCreateManyWithoutNewsesInput>,
  officialDocuments?: Maybe<OfficialDocumentCreateManyWithoutOfficialDocumentsInput>,
  orders?: Maybe<OrderCreateManyWithoutOrdersInput>,
  password: Scalars['String'],
  roles?: Maybe<RoleCreateManyWithoutRolesInput>,
  socialNetworkLinks?: Maybe<SocialLinkCreateManyWithoutSocialNetworkLinksInput>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

/** Basic root groups of @alicialonso registered users */
export enum UserGroup {
  Estudiante = 'ESTUDIANTE',
  General = 'GENERAL',
  Staff = 'STAFF'
}

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['UUID']>,
};


/** Places */
export type Venue = {
   __typename?: 'Venue',
  address: Scalars['String'],
  id: Scalars['UUID'],
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
  name: Scalars['String'],
  placeID: Scalars['String'],
  spaces: Array<Space>,
};


/** Places */
export type VenueSpacesArgs = {
  after?: Maybe<Scalars['UUID']>,
  before?: Maybe<Scalars['UUID']>,
  first: Scalars['Int'],
  last: Scalars['Int'],
  skip: Scalars['Int']
};

export type VenueCreateInput = {
  address: Scalars['String'],
  createdAt?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['UUID']>,
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
  name: Scalars['String'],
  placeID: Scalars['String'],
  spaces?: Maybe<SpaceCreateManyWithoutSpacesInput>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type VenueCreateOneWithoutVenueInput = {
  connect?: Maybe<VenueWhereUniqueInput>,
  create?: Maybe<VenueCreateWithoutSpacesInput>,
};

export type VenueCreateWithoutSpacesInput = {
  address: Scalars['String'],
  createdAt?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['UUID']>,
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
  name: Scalars['String'],
  placeID: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type VenueWhereUniqueInput = {
  id?: Maybe<Scalars['UUID']>,
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
    mutation SignUpUser($email: String!, $password: String!, $firstname: String!, $lastname: String!, $groupRequest: UserGroup = GENERAL) {
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
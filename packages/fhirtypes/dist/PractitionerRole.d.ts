/*
 * This is a generated file
 * Do not edit manually.
 */

import { CodeableConcept } from './CodeableConcept';
import { ContactPoint } from './ContactPoint';
import { Endpoint } from './Endpoint';
import { Extension } from './Extension';
import { HealthcareService } from './HealthcareService';
import { Identifier } from './Identifier';
import { Location } from './Location';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Organization } from './Organization';
import { Period } from './Period';
import { Practitioner } from './Practitioner';
import { Reference } from './Reference';
import { Resource } from './Resource';

/**
 * A specific set of Roles/Locations/specialties/services that a
 * practitioner may perform at an organization for a period of time.
 */
export interface PractitionerRole {

  /**
   * This is a PractitionerRole resource
   */
  readonly resourceType: 'PractitionerRole';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * A human-readable narrative that contains a summary of the resource and
   * can be used to represent the content of the resource to a human. The
   * narrative need not encode all the structured data, but is required to
   * contain sufficient detail to make it &quot;clinically safe&quot; for a human to
   * just read the narrative. Resource definitions may define what content
   * should be represented in the narrative to ensure clinical safety.
   */
  text?: Narrative;

  /**
   * These resources do not have an independent existence apart from the
   * resource that contains them - they cannot be identified independently,
   * and nor can they have their own independent transaction scope.
   */
  contained?: Resource[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource and that modifies the
   * understanding of the element that contains it and/or the understanding
   * of the containing element's descendants. Usually modifier elements
   * provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the
   * definition and use of extensions. Though any implementer is allowed to
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension. Applications processing a
   * resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Business Identifiers that are specific to a role/location.
   */
  identifier?: Identifier[];

  /**
   * Whether this practitioner role record is in active use.
   */
  active?: boolean;

  /**
   * The period during which the person is authorized to act as a
   * practitioner in these role(s) for the organization.
   */
  period?: Period;

  /**
   * Practitioner that is able to provide the defined services for the
   * organization.
   */
  practitioner?: Reference<Practitioner>;

  /**
   * The organization where the Practitioner performs the roles associated.
   */
  organization?: Reference<Organization>;

  /**
   * Roles which this practitioner is authorized to perform for the
   * organization.
   */
  code?: CodeableConcept[];

  /**
   * Specific specialty of the practitioner.
   */
  specialty?: CodeableConcept[];

  /**
   * The location(s) at which this practitioner provides care.
   */
  location?: Reference<Location>[];

  /**
   * The list of healthcare services that this worker provides for this
   * role's Organization/Location(s).
   */
  healthcareService?: Reference<HealthcareService>[];

  /**
   * Contact details that are specific to the role/location/service.
   */
  telecom?: ContactPoint[];

  /**
   * A collection of times the practitioner is available or performing this
   * role at the location and/or healthcareservice.
   */
  availableTime?: PractitionerRoleAvailableTime[];

  /**
   * The practitioner is not available or performing this role during this
   * period of time due to the provided reason.
   */
  notAvailable?: PractitionerRoleNotAvailable[];

  /**
   * A description of site availability exceptions, e.g. public holiday
   * availability. Succinctly describing all possible exceptions to normal
   * site availability as details in the available Times and not available
   * Times.
   */
  availabilityExceptions?: string;

  /**
   * Technical endpoints providing access to services operated for the
   * practitioner with this role.
   */
  endpoint?: Reference<Endpoint>[];
}

/**
 * A collection of times the practitioner is available or performing this
 * role at the location and/or healthcareservice.
 */
export interface PractitionerRoleAvailableTime {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Indicates which days of the week are available between the start and
   * end Times.
   */
  daysOfWeek?: ('mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun')[];

  /**
   * Is this always available? (hence times are irrelevant) e.g. 24 hour
   * service.
   */
  allDay?: boolean;

  /**
   * The opening time of day. Note: If the AllDay flag is set, then this
   * time is ignored.
   */
  availableStartTime?: string;

  /**
   * The closing time of day. Note: If the AllDay flag is set, then this
   * time is ignored.
   */
  availableEndTime?: string;
}

/**
 * The practitioner is not available or performing this role during this
 * period of time due to the provided reason.
 */
export interface PractitionerRoleNotAvailable {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * The reason that can be presented to the user as to why this time is
   * not available.
   */
  description: string;

  /**
   * Service is not available (seasonally or for a public holiday) from
   * this date.
   */
  during?: Period;
}

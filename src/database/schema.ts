import { array, boolean, date, define, enums, masked, max,min, number, object, optional, string } from 'superstruct';

/** Rethinkdb Pointype conpet with supersturct {@link https://rethinkdb.com/api/javascript/point} */
const Location = define<{ reql: '$Lacation', point: [number, number] }>('Location', value => { return value === value; });
const Relation = define<string>('Relation', value => { return value === value; });
const Url      = define<string>('Url', value => { return value === value; });
const Grade    = enums(<const>['ป. 1', 'ป. 2', 'ป. 3']);
const Gender   = enums(<const>['male', 'female', 'none']);

export const SchoolsSchame = masked(object({
  id:                    string(),
  title:                 string(),
  location:              Location,
  province:              string(),
  date_of_establishment: optional(date()),
  markdown:              string(),
  link_website:          optional(Url),
  link_facebook:         optional(Url),
  link_googlemap:        optional(Url),
}));

export const TeachersSchame = masked(object({
  id:        string(),
  name:      string(),
  gender:    Gender,
  schools:   Relation,
  picture:   optional(Url),
  birthdate: optional(date()),
  created:   date(),
  markdown:  string(),
}));

export const UsersSchame = masked(object({
  id:        string(),
  name:      string(),
  gender:    Gender,
  picture:   optional(Url),
  birthdate: optional(date()),
  created:   date(),
  verified:  boolean(),
  markdown:  string(),
  schools:   array(object({
    school:      Relation,
    date_start:  optional(date()),
    date_end:    optional(date()),
    grade_start: Grade,
    grade_end:   Grade,
  })),
}));

export const ReviewsSchame = masked(object({
  id:       string(),
  writer:   Relation,
  school:   Relation,
  markdown: string(),
  created:  date(),
  tag:      array(Relation),
  star:     optional(max(min(number(), 1), 5)),
}));

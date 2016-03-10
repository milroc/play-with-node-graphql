// HACK: Force the relationships to be initialized before the server starts or
// before a script is ran.
import {} from './person/PersonRelationships';
import {} from './post/PostRelationships';

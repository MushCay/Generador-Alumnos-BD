CREATE TABLE IF NOT EXISTS alumnos(
    expediente INTEGER NOT NULL UNIQUE CHECK (expediente BETWEEN 100000000 AND 999999999),  
    app1 VARCHAR(255) NOT NULL CHECK(LENGTH(TRIM(app1))>0),
    app2 VARCHAR(255) CHECK (app2 IS NULL OR (LENGTH(TRIM(app2)) > 0)),
    nombres VARCHAR(255) NOT NULL CHECK(LENGTH(TRIM(nombres))> 0),
    correo VARCHAR(255) NOT NULL UNIQUE CHECK (correo = 'a' || expediente || '@unison.mx')
);

--CREAR LA FUNCION QUE MANDA A LLAMAR EL TRIGGER
CREATE OR REPLACE FUNCTION bi_alumnos_app1_fn()
RETURNS TRIGGER AS $$
BEGIN
    NEW.app1 := TRIM(NEW.app1);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

--EL TRIGGER QUE MANDA LLAMAR LA FUNCION

CREATE TRIGGER bi_alumnos_app1
BEFORE INSERT ON alumnos
FOR EACH ROW
EXECUTE FUNCTION bi_alumnos_app1_fn();

--PRUEBAS DE INTEGRIDAD
INSERT INTO alumnos (expediente, app1, app2, nombres, correo)
VALUES (
    123456789,
    '  Pérez  ',
    '  Gómez  ',
    '  Juan Carlos  ',
    'a123456789@unison.mx'
);

--INSERT INVALIDO
INSERT INTO alumnos (expediente, app1, nombres, correo)VALUES (12345,'Pérez','Juan','a12345@unison.mx');



import { compileAndRun } from "../services/compileCpp.js";

export const executeCode = async (req, res) => {

  try {

    const { code, input } = req.body;

    const result = await compileAndRun(code, input);

    res.json({
      success: true,
      output: result
    });

  } catch (error) {

    res.json({
      success: false,
      output: error.toString()
    });

  }
};